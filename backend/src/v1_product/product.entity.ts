import { Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'PRODUCT' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  storage: string;

  @Column({ nullable: true })
  ram: string;

  @Column({ nullable: true })
  year: string;

  @Column({ nullable: true })
  camera: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  rem_quantity: string;
}
