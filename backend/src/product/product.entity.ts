import { Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  brand: string;

  @Column()
  color: string;

  @Column()
  storage: string;

  @Column()
  ram: string;

  @Column()
  year: string;

  @Column()
  camera: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  rem_quantity: string;
}
