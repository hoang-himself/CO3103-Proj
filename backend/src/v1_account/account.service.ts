import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { AccountRepository } from './account.repository';
import { Account } from './account.entity';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { SignInCredentialDto } from './dto/sign-in-credentials.dto';
import { GoogleLogInDto } from 'src/auth/dto/google-login.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountRepository)
    private accRep: AccountRepository,
  ) { }

  async getAccountByEmail(email: string): Promise<Account> {
    return this.accRep.getAccountByEmail(email);
  }

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.accRep.createUser(authCredentialDto);
  }

  async registerByGoogle(googleLogInDto: GoogleLogInDto): Promise<string>{
    const {email, firstName, lastName} = googleLogInDto;
    const authCredentialDto: AuthCredentialDto = {
      email,
      firstName,
      password: "randompassword",
    }

    return this.accRep.saveGoogleUser(authCredentialDto, lastName);
  }


  async signIn(signInCredentialDto: SignInCredentialDto): Promise<string> {
    // string here is ready for JWT
    const { email, password } = signInCredentialDto;
    const user = await this.accRep.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'success';
    }
    else throw new UnauthorizedException("Incorrect email or password");

  }
}
