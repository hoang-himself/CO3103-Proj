import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: string;
}
