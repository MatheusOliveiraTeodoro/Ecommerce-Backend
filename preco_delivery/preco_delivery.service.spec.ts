import { Test, TestingModule } from '@nestjs/testing';
import { PrecoDeliveryService } from './preco_delivery.service';

describe('PrecoDeliveryService', () => {
  let service: PrecoDeliveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrecoDeliveryService],
    }).compile();

    service = module.get<PrecoDeliveryService>(PrecoDeliveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
