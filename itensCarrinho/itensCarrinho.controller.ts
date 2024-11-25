import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ItemCarrinhoService } from './itensCarrinho.service';
import { ItemCarrinho } from './itensCarrinho.entity';

@Controller('itens-carrinho')
export class ItemCarrinhoController {
    constructor(private readonly itemCarrinhoService: ItemCarrinhoService) {}

    @Get()
    findAll(): Promise<ItemCarrinho[]> {
        return this.itemCarrinhoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<ItemCarrinho> {
        return this.itemCarrinhoService.findOne(id);
    }

    @Post()
    create(@Body() itemCarrinho: Partial<ItemCarrinho>): Promise<ItemCarrinho> {
        return this.itemCarrinhoService.create(itemCarrinho);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() itemCarrinho: Partial<ItemCarrinho>): Promise<ItemCarrinho> {
        return this.itemCarrinhoService.update(id, itemCarrinho);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.itemCarrinhoService.remove(id);
    }
}
