import { Controller, Get, Post, Param, Body, Delete, Put, Req } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './carrinho.entity';
import { User } from 'src/usuario/usuario.entity';
import { Request } from 'express'; 

@Controller('carrinhos')
export class CarrinhoController {
    constructor(private readonly carrinhoService: CarrinhoService) {}

    @Get()
    findAll(@Req() request: Request): Promise<Carrinho[]> { 
      const user = request.user; 
      return this.carrinhoService.findAll(user); 
    }

    @Get('meu-carrinho')
    async getCarrinhoUsuario(@Req() request: Request): Promise<Carrinho> {
        const usuarioId = request.user.id; 
        return this.carrinhoService.findCarrinhoByUserId(usuarioId);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Carrinho> {
        return this.carrinhoService.findOne(id);
    }

    @Post()
    create(@Body() carrinho: Partial<Carrinho>): Promise<Carrinho> {
        return this.carrinhoService.create(carrinho);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() carrinho: Partial<Carrinho>): Promise<Carrinho> {
        return this.carrinhoService.update(id, carrinho);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.carrinhoService.remove(id);
    }
}
