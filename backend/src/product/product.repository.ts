import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/createProduct.dto';


@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{
    async getProductForHomepage(nP: number): Promise<Product[]> {
        const product = await this.find();
        if(product.length <=nP) return product;
        const toRet = product.filter((prod) => {
            return prod.id <= nP;
        })
        return toRet;
    }

    async createProduct(createProdDto: CreateProductDto): Promise<Product> {
        const { brand, name, price } = createProdDto;
        const prod = this.create({
          image: 'N/A',
          brand,
          color: 'N/A',
          storage: 'N/A',
          ram: 'N/A',
          year: 'N/A',
          camera: 'N/A',
          name,
          description: 'N/A',
          price,
          rem_quantity: 'N/A',
        });
        await this.save(prod);
        return prod;
      }
}