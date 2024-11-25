import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ItemPedidoService } from './itensPedido.service';
import { ItemPedido } from './itensPedido.entity';

@Controller('itens-pedido')
export class ItemPedidoController {
  constructor(private readonly itemPedidoService: ItemPedidoService) {}

  @Post()
  async create(@Body() itemPedidoData: Partial<ItemPedido>): Promise<ItemPedido> {
    return this.itemPedidoService.create(itemPedidoData);
  }

  @Get()
  async findAll(): Promise<ItemPedido[]> {
    return this.itemPedidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ItemPedido> {
    return this.itemPedidoService.findOne(id);
  }
}
