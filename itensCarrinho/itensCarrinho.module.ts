import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCarrinho } from './itensCarrinho.entity';
import { ItemCarrinhoController } from './itensCarrinho.controller';
import { ItemCarrinhoService } from './itensCarrinho.service';

@Module({
    imports: [TypeOrmModule.forFeature([ItemCarrinho])],
    controllers: [ItemCarrinhoController],
    providers: [ItemCarrinhoService],
})
export class ItemCarrinhoModule {}
