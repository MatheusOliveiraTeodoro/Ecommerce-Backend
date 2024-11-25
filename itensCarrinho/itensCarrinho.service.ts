import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemCarrinho } from './itensCarrinho.entity';

@Injectable()
export class ItemCarrinhoService {
    constructor(
        @InjectRepository(ItemCarrinho)
        private readonly itemCarrinhoRepository: Repository<ItemCarrinho>,
    ) {}

    findAll(): Promise<ItemCarrinho[]> {
        return this.itemCarrinhoRepository.find({ relations: ['carrinho', 'produto'] });
    }

    findOne(id: number): Promise<ItemCarrinho> {
        return this.itemCarrinhoRepository.findOne({
            where: { id },
            relations: ['carrinho', 'produto'],
        });
    }

    create(itemCarrinho: Partial<ItemCarrinho>): Promise<ItemCarrinho> {
        const newItemCarrinho = this.itemCarrinhoRepository.create(itemCarrinho);
        return this.itemCarrinhoRepository.save(newItemCarrinho);
    }

    async update(id: number, itemCarrinho: Partial<ItemCarrinho>): Promise<ItemCarrinho> {
        await this.itemCarrinhoRepository.update(id, itemCarrinho);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.itemCarrinhoRepository.delete(id);
    }
}
