import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcategorias } from './subcategoria.entity';

@Injectable()
export class SubcategoriasService {
  constructor(
    @InjectRepository(Subcategorias)
    private subcategoriasRepository: Repository<Subcategorias>,
  ) {}

  // Retorna todos os registros da tabela
  async findAll(): Promise<Subcategorias[]> {
    return this.subcategoriasRepository.find();
  }

  // Pega um registro por ID
  findOne(id: number): Promise<Subcategorias> {
    return this.subcategoriasRepository.findOneBy({ id });
  }

  async create(data: Partial<Subcategorias>): Promise<Subcategorias> {
    const newEntry = this.subcategoriasRepository.create(data);
    return this.subcategoriasRepository.save(newEntry);
  }

  async update(id: number, updatesubcategoriasDto: Partial<Subcategorias>): Promise<Subcategorias> {
    await this.subcategoriasRepository.update(id, updatesubcategoriasDto);
    const updateEntity = await this.subcategoriasRepository.findOne({ where: {id}});
    if (!updateEntity) {
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
    return updateEntity;
  }

  async remove(id: string): Promise<void> {
    const result = await this.subcategoriasRepository.delete(id);
    if (result.affected === 0){
      throw new NotFoundException(`Registro com id ${id} nao encontrado`);
    }
  }
}
