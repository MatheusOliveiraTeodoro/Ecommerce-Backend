import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Peso } from 'src/peso/peso.entity';
import { Categorias } from 'src/categorias/categoria.entity';
import { Avaliacao } from 'src/avaliacao/avaliacao.entity';
import { ItemCarrinho } from 'src/itensCarrinho/itensCarrinho.entity';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  preco_sem_desconto: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco_real_venda: number;

  @Column({ default: false })
  desconto: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  quantidade_desconto: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_adicionado: Date;

  @Column({ type:'boolean', default: false })
  bestsaler: boolean;

  @Column({ length: 50, nullable: true })
  idade: string;

  @ManyToOne(() => Peso, { eager: true })
  @JoinColumn({ name: 'peso_id' })
  peso: Peso;

  @ManyToOne(() => Categorias, { nullable: true, onDelete: 'SET NULL', eager: true })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categorias;

  @OneToMany(() => Avaliacao, avaliacao => avaliacao.produto)
  avaliacoes: Avaliacao[];

  @OneToMany(() => ItemCarrinho, (item) => item.produto)
  itens: ItemCarrinho[];

}
