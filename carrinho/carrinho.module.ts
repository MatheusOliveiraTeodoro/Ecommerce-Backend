import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './carrinho.entity';
import { CarrinhoController } from './carrinho.controller';
import { CarrinhoService } from './carrinho.service';
import { User } from 'src/usuario/usuario.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Carrinho, User])
    ],
    controllers: [CarrinhoController],
    providers: [CarrinhoService],
})
export class CarrinhoModule {}
