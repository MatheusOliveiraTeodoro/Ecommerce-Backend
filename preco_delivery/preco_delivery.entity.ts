import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PrecoDelivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @Column()
  dias_entrega: string;
}