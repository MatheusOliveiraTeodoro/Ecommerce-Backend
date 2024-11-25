import { Test, TestingModule } from '@nestjs/testing';
import { PrecoDeliveryController } from './preco_delivery.controller';

describe('PrecoDeliveryController', () => {
  let controller: PrecoDeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrecoDeliveryController],
    }).compile();

    controller = module.get<PrecoDeliveryController>(PrecoDeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
