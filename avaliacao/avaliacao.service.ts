import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';

@Injectable()
export class AvaliacaoService {
    constructor(
        @InjectRepository(Avaliacao)
        private readonly avaliacaoRepository: Repository<Avaliacao>,
    ) {}

    findAll(): Promise<Avaliacao[]> {
        return this.avaliacaoRepository.find({ relations: ['produto', 'usuario'] });
    }

    findOne(id: number): Promise<Avaliacao> {
        return this.avaliacaoRepository.findOne({ where: { id }, relations: ['produto', 'usuario'] });
    }

    create(avaliacao: Avaliacao): Promise<Avaliacao> {
        return this.avaliacaoRepository.save(avaliacao);
    }

    async update(id: number, avaliacao: Avaliacao): Promise<Avaliacao> {
        await this.avaliacaoRepository.update(id, avaliacao);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.avaliacaoRepository.delete(id);
    }
}
