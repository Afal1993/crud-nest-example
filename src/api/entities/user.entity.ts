import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'full_name'})
  fullName: string;
  
  @Column({nullable:true})
  cpf: string;
  
  @Column({nullable:true})
  birthday: Date;
  
  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column({nullable:true})
  phone: number;

}