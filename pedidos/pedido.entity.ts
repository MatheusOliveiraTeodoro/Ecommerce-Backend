import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/usuario/usuario.entity';
import { ItemPedido } from 'src/itensPedido/itensPedido.entity';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'int', unsigned: true })
  usuarioId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataPedido: Date;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @ManyToOne(() => User, (usuario) => usuario.pedidos, { onDelete: 'CASCADE' })
  usuario: User;

  @OneToMany(() => ItemPedido, (item) => item.pedido)
  itens: ItemPedido[]; // Adicione esta linha
}
