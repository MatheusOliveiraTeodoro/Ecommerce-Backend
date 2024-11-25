import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Peso } from './peso.entity';

@Injectable()
export class PesoService {
  constructor(
    @InjectRepository(Peso)
    private pesoRepository: Repository<Peso>,
  ) {}

  // Retorna todos os registros da tabela
  async findAll(): Promise<Peso[]> {
    return this.pesoRepository.find();
  }

  // Pega um registro por ID
  findOne(id: number): Promise<Peso> {
    return this.pesoRepository.findOneBy({ id });
  }

  async create(data: Partial<Peso>): Promise<Peso> {
    const newEntry = this.pesoRepository.create(data);
    return this.pesoRepository.save(newEntry);
  }

  async update(id: number, updatepesoDto: Partial<Peso>): Promise<Peso> {
    await this.pesoRepository.update(id, updatepesoDto);
    const updateEntity = await this.pesoRepository.findOne({ where: {id}});
    if (!updateEntity) {
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
    return updateEntity;
  }

  async remove(id: string): Promise<void> {
    const result = await this.pesoRepository.delete(id);
    if (result.affected === 0){
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
  }
}
