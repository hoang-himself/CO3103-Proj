import { GoogleController } from "./google.controller";
import { GoogleService } from "./google.service";
import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import { GoogleStrategy } from "./google.strategy";
import { AccountModule } from "src/v1_account/account.module";

@Module({
    imports: [
      PassportModule.register({defaultStrategy: 'google'}),
      AccountModule,
    ],
    controllers: [GoogleController],
    providers: [GoogleService, GoogleStrategy],
  })
  export class GoogleModule {}