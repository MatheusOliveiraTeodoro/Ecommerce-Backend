import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoSubcategoria } from './produtos_subcategorias.entity';

@Injectable()
export class ProdutoSubcategoriaService {
  constructor(
    @InjectRepository(ProdutoSubcategoria)
    private readonly produtoSubcategoriaRepository: Repository<ProdutoSubcategoria>,
  ) {}

  async addSubcategoriaToProduto(produtoId: number, subcategoriaId: number): Promise<ProdutoSubcategoria> {
    const produtoSubcategoria = this.produtoSubcategoriaRepository.create({
      produto_id: produtoId,
      subcategoria_id: subcategoriaId,
    });
    return this.produtoSubcategoriaRepository.save(produtoSubcategoria);
  }

  async findSubcategoriasByProdutoId(produtoId: number): Promise<ProdutoSubcategoria[]> {
    return this.produtoSubcategoriaRepository.find({
      where: { produto_id: produtoId },
      relations: ['subcategoria'],
    });
  }

  async removeSubcategoriaFromProduto(produtoId: number, subcategoriaId: number): Promise<void> {
    await this.produtoSubcategoriaRepository.delete({ produto_id: produtoId, subcategoria_id: subcategoriaId });
  }
}
