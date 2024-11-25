import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async create(@Body() pedidoData: Partial<Pedido>): Promise<Pedido> {
    return this.pedidoService.create(pedidoData);
  }

  @Get()
  async findAll(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pedido> {
    return this.pedidoService.findOne(id);
  }
}
