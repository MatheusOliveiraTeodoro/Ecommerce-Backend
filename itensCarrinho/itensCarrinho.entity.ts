import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Produto } from 'src/produtos/produto.entity';
import { Carrinho } from 'src/carrinho/carrinho.entity';

@Entity('itens_carrinho')
export class ItemCarrinho {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column({ type: 'bigint', unsigned: true })
    carrinhoId: number;

    @Column({ type: 'bigint', unsigned: true })
    produtoId: number;

    @Column({ type: 'int' })
    quantidade: number;

    @ManyToOne(() => Carrinho, carrinho => carrinho.itens, { onDelete: 'CASCADE' })
    carrinho: Carrinho;

    @ManyToOne(() => Produto, produto => produto.itens, { onDelete: 'CASCADE' })
    produto: Produto;
}
