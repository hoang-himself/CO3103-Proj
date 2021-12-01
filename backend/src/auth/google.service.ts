import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/v1_account/account.service';
import { GoogleLogInDto } from './dto/google-login.dto';

@Injectable()
export class GoogleService {
  constructor(private readonly accountService: AccountService){}
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    console.log(req.user);
    const {email, firstName, lastName} = req.user;
    const googleLogInDto: GoogleLogInDto = {
      email,
      firstName,
      lastName,
    }
    this.accountService.registerByGoogle(googleLogInDto);
    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
