import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoService } from './avaliacao.service';
import { Avaliacao } from './avaliacao.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from 'src/produtos/produto.entity';
import { User } from 'src/usuario/usuario.entity';

describe('AvaliacaoService', () => {
    let service: AvaliacaoService;
    let repository: Repository<Avaliacao>;

    const mockAvaliacaoRepository = () => ({
        find: jest.fn(),
        findOne: jest.fn(),
        save: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    });

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AvaliacaoService,
                {
                    provide: getRepositoryToken(Avaliacao),
                    useFactory: mockAvaliacaoRepository,
                },
            ],
        }).compile();

        service = module.get<AvaliacaoService>(AvaliacaoService);
        repository = module.get<Repository<Avaliacao>>(getRepositoryToken(Avaliacao));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of avaliacoes', async () => {
            const avaliacoes = [{ id: 1, produtoId: 1, usuarioId: 1, nota: 5, comentario: 'Excelente', dataAvaliacao: new Date() }];
            jest.spyOn(repository, 'find').mockResolvedValue(avaliacoes as any);
            const result = await service.findAll();
            expect(result).toEqual(avaliacoes);
        });
    });

    describe('findOne', () => {
        it('should return a single avaliacao', async () => {
            const avaliacao = { id: 1, produtoId: 1, usuarioId: 1, nota: 5, comentario: 'Excelente', dataAvaliacao: new Date() };
            jest.spyOn(repository, 'findOne').mockResolvedValue(avaliacao as any);
            const result = await service.findOne(1);
            expect(result).toEqual(avaliacao);
        });
    });

    describe('create', () => {
        it('should create a new avaliacao', async () => {
            const avaliacaoData = {
                produtoId: 1,
                usuarioId: 1,
                nota: 5,
                comentario: 'Excelente',
            };
    
            const avaliacao: Avaliacao = {
                id: 1,
                ...avaliacaoData,
                dataAvaliacao: new Date(),
                produto: { id: 1 } as Produto,  
                usuario: { id: 1 } as User,  
            };
        });
    });
    

    describe('update', () => {
        it('should update an avaliacao and return it', async () => {
            const avaliacaoData = {
                produtoId: 1,
                usuarioId: 1,
                nota: 5,
                comentario: 'Excelente',
            };
    
            const avaliacao: Avaliacao = {
                id: 1,
                ...avaliacaoData,
                dataAvaliacao: new Date(),
                produto: { id: 1 } as Produto, 
                usuario: { id: 1 } as User, 
            };
        });
    });
    
    describe('remove', () => {
        it('should remove an avaliacao', async () => {
            jest.spyOn(repository, 'delete').mockResolvedValue(undefined);
            await service.remove(1);
            expect(repository.delete).toHaveBeenCalledWith(1);
        });
    });
});
