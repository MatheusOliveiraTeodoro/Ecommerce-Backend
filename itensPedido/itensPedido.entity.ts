import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pedido } from 'src/pedidos/pedido.entity';
import { Produto } from 'src/produtos/produto.entity';

@Entity('itens_pedido')
export class ItemPedido {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true })
  pedidoId: number;

  @Column({ type: 'bigint', unsigned: true })
  produtoId: number;

  @Column({ type: 'int' })
  quantidade: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precoUnitario: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens, { onDelete: 'CASCADE' })
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.itens, { onDelete: 'CASCADE' })
  produto: Produto;
}
