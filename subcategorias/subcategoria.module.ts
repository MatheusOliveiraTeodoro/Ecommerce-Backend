import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategorias } from './subcategoria.entity';
import { SubcategoriasService } from './subcategoria.service';
import { SubcategoriaController } from './subcategoria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategorias])],
  providers: [SubcategoriasService],
  controllers: [SubcategoriaController],
})
export class SubcategoriasModule {}
