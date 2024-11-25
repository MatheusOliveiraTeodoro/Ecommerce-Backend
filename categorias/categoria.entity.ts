import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from 'src/produtos/produto.entity';

@Entity()
export class Categorias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_categoria: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];
}