import { IsEmail, IsEnum, Min } from 'class-validator';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
//import { AuthProvider } from './account.enum';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  //@IsEnum(AuthProvider)
  @Column()
  authProvider : string;

  //@IsEmail()
  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  male: boolean;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  balance : number;

  @Column({ nullable: true })
  cur_point: number;

  @Column()
  total_point: number;

  @CreateDateColumn()
  date_joined: Date;

}
