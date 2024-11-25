import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrinho } from './carrinho.entity';
import { User } from 'src/usuario/usuario.entity';

@Injectable()
export class CarrinhoService {
    constructor(
        @InjectRepository(Carrinho)
        private readonly carrinhoRepository: Repository<Carrinho>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    findAll(user: User): Promise<Carrinho[]> {
        return this.carrinhoRepository.find({ 
            where: { usuario: user },
            relations: ['usuario'] });
    }

    async findOne(id: number): Promise<Carrinho> {
        return this.carrinhoRepository.findOne({
            where: { id },
            relations: ['usuario'],
        });
    }
    

    create(carrinho: Partial<Carrinho>): Promise<Carrinho> {
        const newCarrinho = this.carrinhoRepository.create(carrinho);
        return this.carrinhoRepository.save(newCarrinho);
    }

    async update(id: number, carrinho: Partial<Carrinho>): Promise<Carrinho> {
        await this.carrinhoRepository.update(id, carrinho);
        return this.findOne(id);
    }

    async createCarrinho(usuarioId: number): Promise<Carrinho> {
        const carrinho = this.carrinhoRepository.create({ usuarioId });
        return this.carrinhoRepository.save(carrinho);
      }
    
      async findCarrinhoByUserId(usuarioId: number): Promise<Carrinho | undefined> {
        return this.carrinhoRepository.findOne({ where: { usuarioId } });
      }

    async remove(id: number): Promise<void> {
        await this.carrinhoRepository.delete(id);
    }
}
