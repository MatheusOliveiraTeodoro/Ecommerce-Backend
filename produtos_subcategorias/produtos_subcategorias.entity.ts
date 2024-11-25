import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Produto } from 'src/produtos/produto.entity';
import { Subcategorias } from 'src/subcategorias/subcategoria.entity';

@Entity('produtos_subcategorias')
export class ProdutoSubcategoria {
  @PrimaryColumn({ type: 'bigint', unsigned: true })
  produto_id: number;

  @PrimaryColumn({ type: 'int' })
  subcategoria_id: number;

  @ManyToOne(() => Produto, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @ManyToOne(() => Subcategorias, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'subcategoria_id' })
  subcategoria: Subcategorias;
}
