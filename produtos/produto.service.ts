  import { Injectable, NotFoundException } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Produto } from './produto.entity';

  @Injectable()
  export class ProdutoService {
    constructor(
      @InjectRepository(Produto)
      private produtoRepository: Repository<Produto>,
    ) {}

    async findAll(options?: any): Promise<Produto[]> {
      return this.produtoRepository.find(options);
    }

    findOne(id: number): Promise<Produto> {
      return this.produtoRepository.findOneBy({ id });
    }

    async create(data: Partial<Produto>): Promise<Produto> {
      const newEntry = this.produtoRepository.create(data);
      return this.produtoRepository.save(newEntry);
    }

    async update(id: number, updateProdutoDto: Partial<Produto>): Promise<Produto> {
      await this.produtoRepository.update(id, updateProdutoDto);
      const updateEntity = await this.produtoRepository.findOne({ where: {id}});
      if (!updateEntity) {
        throw new NotFoundException(`Registro com id ${id} nao encontrado`);
      }
      return updateEntity;
    }

    async remove(id: string): Promise<void> {
      const result = await this.produtoRepository.delete(id);
      if (result.affected === 0){
        throw new NotFoundException(`Registro com id ${id} nao encontrado`);
      }
    }
  }
