import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peso } from './peso.entity';
import { PesoService } from './peso.service';
import { PesoController } from './peso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Peso])],
  providers: [PesoService],
  controllers: [PesoController],
})
export class PesoModule {}
