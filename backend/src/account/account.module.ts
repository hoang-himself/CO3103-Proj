import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from './account.repository';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';


@Module({
  imports: [TypeOrmModule.forFeature([AccountRepository])],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
