import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { User } from 'src/usuario/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, User])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
