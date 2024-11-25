import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacaoController } from './avaliacao.controller';
import { AvaliacaoService } from './avaliacao.service';

@Module({
    imports: [TypeOrmModule.forFeature([Avaliacao])],
    controllers: [AvaliacaoController],
    providers: [AvaliacaoService],
})
export class AvaliacaoModule {}
