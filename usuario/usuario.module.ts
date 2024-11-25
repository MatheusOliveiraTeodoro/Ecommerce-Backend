import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './usuario.service';
import { UserController } from './usuario.controller';
import { User } from './usuario.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'sua_chave_secreta', 
      signOptions: { expiresIn: '60s' }, 
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
