import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoSubcategoriaController } from './produtos_subcategorias.controller';
import { ProdutoSubcategoriaService } from './produtos_subcategorias.service';
import { ProdutoSubcategoria } from './produtos_subcategorias.entity';

describe('ProdutoSubcategoriaController', () => {
  let controller: ProdutoSubcategoriaController;
  let service: ProdutoSubcategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoSubcategoriaController],
      providers: [
        {
          provide: ProdutoSubcategoriaService,
          useValue: {
            addSubcategoriaToProduto: jest.fn(),
            findSubcategoriasByProdutoId: jest.fn(),
            removeSubcategoriaFromProduto: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProdutoSubcategoriaController>(ProdutoSubcategoriaController);
    service = module.get<ProdutoSubcategoriaService>(ProdutoSubcategoriaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call addSubcategoriaToProduto when addSubcategoria is called', async () => {
    const produtoId = 1;
    const subcategoriaId = 2;
    const result: ProdutoSubcategoria = { produto_id: produtoId, subcategoria_id: subcategoriaId, produto: null, subcategoria: null };

    jest.spyOn(service, 'addSubcategoriaToProduto').mockResolvedValue(result);

    expect(await controller.addSubcategoria(produtoId, subcategoriaId)).toBe(result);
    expect(service.addSubcategoriaToProduto).toHaveBeenCalledWith(produtoId, subcategoriaId);
  });
});
