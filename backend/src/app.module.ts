import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

//import { ProductModule } from './product/product.module';
@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'db-pip',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
