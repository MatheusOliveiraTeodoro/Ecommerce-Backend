import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) {}

  @Get()
  async findAll(
    @Query('orderByDate') orderByDate: string,
    @Query('bestsaler') bestsaler: string
  ): Promise<Produto[]> {
      const options: any = {};

    if (orderByDate === 'desc') {
      options.order = { data_adicionado: 'DESC' };

    }

    if (bestsaler === 'true') {
      options.where = { bestsaler: true };
    }

    return this.ProdutoService.findAll(options);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Produto> {
    return this.ProdutoService.findOne(+id);
  }

  @Post()
    create(@Body() createProdutoDto: any) {
      return this.ProdutoService.create(createProdutoDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateProdutoDto: Partial<Produto>) {
      return this.ProdutoService.update(id, updateProdutoDto);
    }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ProdutoService.remove(id);
  }
}
