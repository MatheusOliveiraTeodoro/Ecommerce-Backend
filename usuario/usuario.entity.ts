import { Avaliacao } from 'src/avaliacao/avaliacao.entity';
import { Carrinho } from 'src/carrinho/carrinho.entity';
import { Pedido } from 'src/pedidos/pedido.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('usuarios')  
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  sobrenome: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  senha: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;

  @Column({type: 'bigint',  unsigned: true})
  telefone: number;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @OneToMany(() => Avaliacao, avaliacao => avaliacao.produto)
  avaliacoes: Avaliacao[];

  @OneToMany(() => Carrinho, carrinho => carrinho.usuario, { onDelete: 'CASCADE' })
  carrinhos: Carrinho[];

  @OneToMany(() => Pedido, (pedido) => pedido.usuario)
  pedidos: Pedido[];
}
