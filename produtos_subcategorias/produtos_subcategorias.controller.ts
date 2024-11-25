import { Controller, Post, Param, Delete, Get } from '@nestjs/common';
import { ProdutoSubcategoriaService } from './produtos_subcategorias.service';
import { ProdutoSubcategoria } from './produtos_subcategorias.entity';

@Controller('produtos-subcategorias')
export class ProdutoSubcategoriaController {
  constructor(private readonly produtoSubcategoriaService: ProdutoSubcategoriaService) {}

  @Post(':produtoId/subcategorias/:subcategoriaId')
  async addSubcategoria(
    @Param('produtoId') produtoId: number,
    @Param('subcategoriaId') subcategoriaId: number,
  ): Promise<ProdutoSubcategoria> {
    return this.produtoSubcategoriaService.addSubcategoriaToProduto(produtoId, subcategoriaId);
  }

  @Get(':produtoId/subcategorias')
  async findSubcategoriasByProduto(@Param('produtoId') produtoId: number): Promise<ProdutoSubcategoria[]> {
    return this.produtoSubcategoriaService.findSubcategoriasByProdutoId(produtoId);
  }


  @Delete(':produtoId/subcategorias/:subcategoriaId')
  async removeSubcategoria(
    @Param('produtoId') produtoId: number,
    @Param('subcategoriaId') subcategoriaId: number,
  ): Promise<void> {
    return this.produtoSubcategoriaService.removeSubcategoriaFromProduto(produtoId, subcategoriaId);
  }
}
