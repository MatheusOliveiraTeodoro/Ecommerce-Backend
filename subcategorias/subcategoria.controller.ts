import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SubcategoriasService } from './subcategoria.service';
import { Subcategorias } from './subcategoria.entity';

@Controller('subcategorias')
export class SubcategoriaController {
  constructor(private readonly SubcategoriasService: SubcategoriasService) {}

  // Endpoint para buscar todos os dados
  @Get()
  findAll(): Promise<Subcategorias[]> {
    return this.SubcategoriasService.findAll();
  }

  // Endpoint para buscar um dado especifico
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Subcategorias> {
    return this.SubcategoriasService.findOne(+id);
  }

  // Endpoint para adicionar um dado
  @Post()
    create(@Body() createsubcategoriasDto: any) {
      return this.SubcategoriasService.create(createsubcategoriasDto);
    }

  // Endpoint para atualizar um dado
    @Put(':id')
    async update(@Param('id') id: number, @Body() updatesubcategoriasDto: Partial<Subcategorias>) {
      return this.SubcategoriasService.update(id, updatesubcategoriasDto);
    }

  // Endpoint para deletar dados
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.SubcategoriasService.remove(id);
  }
}
