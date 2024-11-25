import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorias } from './categoria.entity';
import { CategoriasService } from './categoria.service';
import { CategoriaController } from './categoria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Categorias])],
  providers: [CategoriasService],
  controllers: [CategoriaController],
})
export class CategoriasModule {}
