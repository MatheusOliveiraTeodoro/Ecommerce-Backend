import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrecoDeliveryModule } from "./preco_delivery/preco_delivery.module";
import { PrecoDelivery } from "./preco_delivery/preco_delivery.entity";
import { Produto } from "./produtos/produto.entity";
import { ProdutoModule } from "./produtos/produto.module";
import { Categorias } from "./categorias/categoria.entity";
import { CategoriasModule } from "./categorias/categoria.module";
import { Subcategorias } from "./subcategorias/subcategoria.entity";
import { SubcategoriasModule } from "./subcategorias/subcategoria.module";
import { Peso } from "./peso/peso.entity";
import { PesoModule } from "./peso/peso.module";
import { ProdutoSubcategoria } from "./produtos_subcategorias/produtos_subcategorias.entity";
import { ProdutoSubcategoriaModule } from "./produtos_subcategorias/produtos_subcategorias.module";
import { User } from "./usuario/usuario.entity";
import { UserModule } from "./usuario/usuario.module";
import { Avaliacao } from "./avaliacao/avaliacao.entity";
import { AvaliacaoModule } from "./avaliacao/avaliacao.module";
import { Carrinho } from "./carrinho/carrinho.entity";
import { CarrinhoModule } from "./carrinho/carrinho.module";
import { Pedido } from "./pedidos/pedido.entity";
import { PedidoModule } from "./pedidos/pedido.module";
import { ItemPedido } from "./itensPedido/itensPedido.entity";
import { ItemPedidoModule } from "./itensPedido/itensPedido.module";
import { ItemCarrinho } from "./itensCarrinho/itensCarrinho.entity";
import { ItemCarrinhoModule } from "./itensCarrinho/itensCarrinho.module";
import { AuthMiddleware } from "./middleware/auth.middleware";
import { JwtModule } from "@nestjs/jwt";

  @Module({
    imports: [
      
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'L2u8k0e2S2t0a1r7*',
        database: 'BFP',
        entities: [PrecoDelivery,Produto,Categorias,Subcategorias,Peso,ProdutoSubcategoria,
          User,Avaliacao,Carrinho,Pedido,ItemPedido,ItemCarrinho],
        synchronize: false,
      }),
      PrecoDeliveryModule,
      ProdutoModule,
      CategoriasModule,
      SubcategoriasModule,
      PesoModule,
      ProdutoSubcategoriaModule,
      UserModule,
      AvaliacaoModule,
      CarrinhoModule,
      PedidoModule,
      ItemPedidoModule,
      ItemCarrinhoModule
    ],
  })
  export class AppModule {}