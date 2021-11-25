import { Body, Controller, Get, Post } from '@nestjs/common';
import { throws } from 'assert';
import { Account } from './account.entity';
import { AccountService } from './account.service';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { SignInCredentialDto } from './dto/sign-in-credentials.dto';


@Controller('account')
export class AccountController {
  constructor(private accSer: AccountService) { }

  @Get()
  getUserById(@Body() email: string): Promise<Account> {
    return this.accSer.getAccountByEmail(email);
  }

  @Post('/signup')
  signUp(@Body() authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.accSer.signUp(authCredentialDto);
  }

  @Post('/signin')
  signIn(@Body() signInCredentialDto: SignInCredentialDto): Promise<string> {
    return this.accSer.signIn(signInCredentialDto);
  }


}
