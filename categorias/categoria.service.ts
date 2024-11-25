import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorias } from './categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriasRepository: Repository<Categorias>,
  ) {}

  // Retorna todos os registros da tabela
  async findAll(): Promise<Categorias[]> {
    return this.categoriasRepository.find();
  }

  // Pega um registro por ID
  findOne(id: number): Promise<Categorias> {
    return this.categoriasRepository.findOneBy({ id });
  }

  async create(data: Partial<Categorias>): Promise<Categorias> {
    const newEntry = this.categoriasRepository.create(data);
    return this.categoriasRepository.save(newEntry);
  }

  async update(id: number, updatecategoriasDto: Partial<Categorias>): Promise<Categorias> {
    await this.categoriasRepository.update(id, updatecategoriasDto);
    const updateEntity = await this.categoriasRepository.findOne({ where: {id}});
    if (!updateEntity) {
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
    return updateEntity;
  }

  async remove(id: string): Promise<void> {
    const result = await this.categoriasRepository.delete(id);
    if (result.affected === 0){
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
  }
}
