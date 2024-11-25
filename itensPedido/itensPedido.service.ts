import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemPedido } from './itensPedido.entity';

@Injectable()
export class ItemPedidoService {
  constructor(
    @InjectRepository(ItemPedido)
    private readonly itemPedidoRepository: Repository<ItemPedido>,
  ) {}

  async create(itemPedidoData: Partial<ItemPedido>): Promise<ItemPedido> {
    const itemPedido = this.itemPedidoRepository.create(itemPedidoData);
    return this.itemPedidoRepository.save(itemPedido);
  }

  async findAll(): Promise<ItemPedido[]> {
    return this.itemPedidoRepository.find();
  }

  async findOne(id: number): Promise<ItemPedido> {
    return this.itemPedidoRepository.findOneBy({ id });
  }
}
