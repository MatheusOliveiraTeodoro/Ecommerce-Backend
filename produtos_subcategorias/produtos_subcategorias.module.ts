import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoSubcategoria } from './produtos_subcategorias.entity';
import { ProdutoSubcategoriaService } from './produtos_subcategorias.service';
import { ProdutoSubcategoriaController } from './produtos_subcategorias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoSubcategoria])],
  providers: [ProdutoSubcategoriaService],
  controllers: [ProdutoSubcategoriaController],
})
export class ProdutoSubcategoriaModule {}
