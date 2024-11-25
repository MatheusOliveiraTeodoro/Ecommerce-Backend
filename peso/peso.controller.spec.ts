import { Test, TestingModule } from '@nestjs/testing';
import { PesoController } from './peso.controller';

describe('PesoController', () => {
  let controller: PesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PesoController],
    }).compile();

    controller = module.get<PesoController>(PesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
