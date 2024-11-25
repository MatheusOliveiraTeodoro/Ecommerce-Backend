// src/preco-delivery/preco-delivery.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrecoDelivery } from './preco_delivery.entity';

@Injectable()
export class PrecoDeliveryService {
  constructor(
    @InjectRepository(PrecoDelivery)
    private precoDeliveryRepository: Repository<PrecoDelivery>,
  ) {}

  // Retorna todos os registros da tabela
  async findAll(): Promise<PrecoDelivery[]> {
    return this.precoDeliveryRepository.find();
  }

  // Pega um registro por ID
  findOne(id: number): Promise<PrecoDelivery> {
    return this.precoDeliveryRepository.findOneBy({ id });
  }

  async create(data: Partial<PrecoDelivery>): Promise<PrecoDelivery> {
    const newEntry = this.precoDeliveryRepository.create(data);
    return this.precoDeliveryRepository.save(newEntry);
  }

  async update(id: number, updatePrecoDeliveryDto: Partial<PrecoDelivery>): Promise<PrecoDelivery> {
    await this.precoDeliveryRepository.update(id, updatePrecoDeliveryDto);
    const updateEntity = await this.precoDeliveryRepository.findOne({ where: {id}});
    if (!updateEntity) {
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
    return updateEntity;
  }

  async remove(id: string): Promise<void> {
    const result = await this.precoDeliveryRepository.delete(id);
    if (result.affected === 0){
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
  }
}
