import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locales')
export class Locale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  deliveryDate: Date;
  
  @Column()
  startPoint: string;
  
  @Column()
  destinationPoint: string;

  @Column({nullable:true})
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