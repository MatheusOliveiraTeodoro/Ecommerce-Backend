import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/usuario/usuario.entity';
import { ItemCarrinho } from 'src/itensCarrinho/itensCarrinho.entity';

@Entity('carrinhos')
export class Carrinho {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'int', unsigned: true })
    usuarioId: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dataCriacao: Date;

    @ManyToOne(() => User, usuario => usuario.carrinhos, { onDelete: 'CASCADE' })
    usuario: User;

    @OneToMany(() => ItemCarrinho, (item) => item.carrinho)
    itens: ItemCarrinho[];
}
