import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Subcategorias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome_sub : string;

  @Column({ type: 'varchar', length: 50 })
  cor: string;

}