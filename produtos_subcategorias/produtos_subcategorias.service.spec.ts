import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoSubcategoriaService } from './produtos_subcategorias.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProdutoSubcategoria } from './produtos_subcategorias.entity';
import { Repository } from 'typeorm';

const mockProdutoSubcategoriaRepository = () => ({
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  delete: jest.fn(),
});

describe('ProdutoSubcategoriaService', () => {
  let service: ProdutoSubcategoriaService;
  let repository: Repository<ProdutoSubcategoria>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProdutoSubcategoriaService,
        {
          provide: getRepositoryToken(ProdutoSubcategoria),
          useFactory: mockProdutoSubcategoriaRepository,
        },
      ],
    }).compile();

    service = module.get<ProdutoSubcategoriaService>(ProdutoSubcategoriaService);
    repository = module.get<Repository<ProdutoSubcategoria>>(getRepositoryToken(ProdutoSubcategoria));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addSubcategoriaToProduto', () => {
    it('should add a subcategoria to a produto', async () => {
      const produtoId = 1;
      const subcategoriaId = 2;
      const mockProdutoSubcategoria: ProdutoSubcategoria = { produto_id: produtoId, subcategoria_id: subcategoriaId, produto: null, subcategoria: null };

      jest.spyOn(repository, 'create').mockReturnValue(mockProdutoSubcategoria);
      jest.spyOn(repository, 'save').mockResolvedValue(mockProdutoSubcategoria);

      const result = await service.addSubcategoriaToProduto(produtoId, subcategoriaId);
      expect(result).toEqual(mockProdutoSubcategoria);
      expect(repository.create).toHaveBeenCalledWith({ produto_id: produtoId, subcategoria_id: subcategoriaId });
      expect(repository.save).toHaveBeenCalledWith(mockProdutoSubcategoria);
    });
  });

  describe('findSubcategoriasByProdutoId', () => {
    it('should return all subcategorias associated with a produto', async () => {
      const produtoId = 1;
      const mockProdutoSubcategoriaArray: ProdutoSubcategoria[] = [
        { produto_id: produtoId, subcategoria_id: 2, produto: null, subcategoria: null },
        { produto_id: produtoId, subcategoria_id: 3, produto: null, subcategoria: null },
      ];

      jest.spyOn(repository, 'find').mockResolvedValue(mockProdutoSubcategoriaArray);

      const result = await service.findSubcategoriasByProdutoId(produtoId);
      expect(result).toEqual(mockProdutoSubcategoriaArray);
      expect(repository.find).toHaveBeenCalledWith({ where: { produto_id: produtoId }, relations: ['subcategoria'] });
    });
  });

  describe('removeSubcategoriaFromProduto', () => {
    it('should remove a subcategoria from a produto', async () => {
      const produtoId = 1;
      const subcategoriaId = 2;

      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      await service.removeSubcategoriaFromProduto(produtoId, subcategoriaId);
      expect(repository.delete).toHaveBeenCalledWith({ produto_id: produtoId, subcategoria_id: subcategoriaId });
    });
  });
});
