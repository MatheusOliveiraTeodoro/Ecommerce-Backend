import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CategoriasService } from './categoria.service';
import { Categorias } from './categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly CategoriasService: CategoriasService) {}

  // Endpoint para buscar todos os dados
  @Get()
  findAll(): Promise<Categorias[]> {
    return this.CategoriasService.findAll();
  }

  // Endpoint para buscar um dado especifico
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Categorias> {
    return this.CategoriasService.findOne(+id);
  }

  // Endpoint para adicionar um dado
  @Post()
    create(@Body() createcategoriasDto: any) {
      return this.CategoriasService.create(createcategoriasDto);
    }

  // Endpoint para atualizar um dado
    @Put(':id')
    async update(@Param('id') id: number, @Body() updatecategoriasDto: Partial<Categorias>) {
      return this.CategoriasService.update(id, updatecategoriasDto);
    }

  // Endpoint para deletar dados
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.CategoriasService.remove(id);
  }
}
