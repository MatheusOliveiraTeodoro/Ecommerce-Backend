import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PesoService } from './peso.service';
import { Peso } from './peso.entity';

@Controller('peso')
export class PesoController {
  constructor(private readonly PesoService: PesoService) {}

  // Endpoint para buscar todos os dados
  @Get()
  findAll(): Promise<Peso[]> {
    return this.PesoService.findAll();
  }

  // Endpoint para buscar um dado especifico
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Peso> {
    return this.PesoService.findOne(+id);
  }

  // Endpoint para adicionar um dado
  @Post()
    create(@Body() createpesoDto: any) {
      return this.PesoService.create(createpesoDto);
    }

  // Endpoint para atualizar um dado
    @Put(':id')
    async update(@Param('id') id: number, @Body() updatepesoDto: Partial<Peso>) {
      return this.PesoService.update(id, updatepesoDto);
    }

  // Endpoint para deletar dados
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.PesoService.remove(id);
  }
}
