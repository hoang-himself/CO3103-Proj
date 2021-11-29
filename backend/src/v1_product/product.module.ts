import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  exports: [ProductService],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
