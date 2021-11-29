import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { AccountModule } from './v1_account/account.module';
import { AccountController } from './v1_account/account.controller';
import { ProductModule } from './v1_product/product.module';
import { ProductController } from './v1_product/product.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AccountModule,
    ProductModule,
  ],
  controllers: [AppController, AccountController, ProductController],
  providers: [AppService],
})
export class AppModule { }
