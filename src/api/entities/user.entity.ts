import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locale')
export class Locale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  description: string;
  
  @Column()
  street: string;
  
  @Column()
  number: number;
  
  @Column()
  city: string;

  @Column()
  state: string;
  
  @Column({nullable:true})
  neighborhood: string;
  
  @Column({nullable:true})
  complement: string;

  @Column({nullable:true})
  lat: string;

  @Column({nullable:true})
  long: string;

  @Column({nullable:true})
  country: string;
}