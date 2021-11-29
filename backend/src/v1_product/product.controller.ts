import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly prodSer: ProductService) { }

  @Get()
  getProductForHomePage(): Promise<Product[]> {
    return this.prodSer.getProductForHomepage(6);
  }

  @Post()
  createProduct(@Body() createProdDto: CreateProductDto): Promise<Product> {
    return this.prodSer.createProduct(createProdDto);
  }
}
