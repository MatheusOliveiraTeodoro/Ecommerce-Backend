import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PrecoDeliveryService } from './preco_delivery.service';
import { PrecoDelivery } from './preco_delivery.entity';

@Controller('preco-delivery')
export class PrecoDeliveryController {
  constructor(private readonly precoDeliveryService: PrecoDeliveryService) {}

  // Endpoint para buscar todos os dados
  @Get()
  findAll(): Promise<PrecoDelivery[]> {
    return this.precoDeliveryService.findAll();
  }

  // Endpoint para buscar um dado especifico
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PrecoDelivery> {
    return this.precoDeliveryService.findOne(+id);
  }

  // Endpoint para adicionar um dado
  @Post()
    create(@Body() createPrecoDeliveryDto: any) {
      return this.precoDeliveryService.create(createPrecoDeliveryDto);
    }

  // Endpoint para atualizar um dado
    @Put(':id')
    async update(@Param('id') id: number, @Body() updatePrecoDeliveryDto: Partial<PrecoDelivery>) {
      return this.precoDeliveryService.update(id, updatePrecoDeliveryDto);
    }

  // Endpoint para deletar dados
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.precoDeliveryService.remove(id);
  }
}
