import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { Avaliacao } from './avaliacao.entity';

@Controller('avaliacoes')
export class AvaliacaoController {
    constructor(private readonly avaliacaoService: AvaliacaoService) {}

    @Get()
    findAll(): Promise<Avaliacao[]> {
        return this.avaliacaoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Avaliacao> {
        return this.avaliacaoService.findOne(id);
    }

    @Post()
    create(@Body() avaliacao: Avaliacao): Promise<Avaliacao> {
        return this.avaliacaoService.create(avaliacao);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() avaliacao: Avaliacao): Promise<Avaliacao> {
        return this.avaliacaoService.update(id, avaliacao);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.avaliacaoService.remove(id);
    }
}
