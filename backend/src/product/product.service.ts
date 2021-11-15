import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/createProduct.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private prodRep: ProductRepository,
  ) {}

  getProductForHomepage(nP: number): Promise<Product[]> {
    return this.prodRep.getProductForHomepage(nP);
  }

  createProduct(createProdDto: CreateProductDto): Promise<Product> {
    return this.prodRep.createProduct(createProdDto);
  }
}
