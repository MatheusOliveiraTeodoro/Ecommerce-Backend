import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Produto } from 'src/produtos/produto.entity';
import { User } from 'src/usuario/usuario.entity';

@Entity('avaliacoes')
export class Avaliacao {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ name: 'produto_id', type: 'bigint', unsigned: true })
    produtoId: number;

    @Column({ name: 'usuario_id', type: 'int', unsigned: true })
    usuarioId: number;

    @Column({ type: 'int', nullable: false })
    nota: number;

    @Column({ type: 'text', nullable: true })
    comentario: string;

    @Column({ name: 'data_avaliacao', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dataAvaliacao: Date;

    @ManyToOne(() => Produto, produto => produto.avaliacoes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'produto_id' })
    produto: Produto;

    @ManyToOne(() => User, usuario => usuario.avaliacoes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'usuario_id' })
    usuario: User;
}
