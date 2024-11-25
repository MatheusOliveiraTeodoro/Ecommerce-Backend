import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrecoDelivery } from './preco_delivery.entity';
import { PrecoDeliveryService } from './preco_delivery.service';
import { PrecoDeliveryController } from './preco_delivery.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PrecoDelivery])],
  providers: [PrecoDeliveryService],
  controllers: [PrecoDeliveryController],
})
export class PrecoDeliveryModule {}
