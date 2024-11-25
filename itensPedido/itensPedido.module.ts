import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPedido } from './itensPedido.entity';
import { ItemPedidoService } from './itensPedido.service';
import { ItemPedidoController } from './itensPedido.controller';
import { Pedido } from 'src/pedidos/pedido.entity';
import { Produto } from 'src/produtos/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemPedido, Pedido, Produto])],
  controllers: [ItemPedidoController],
  providers: [ItemPedidoService],
})
export class ItemPedidoModule {}
