import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UserService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }

    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.usersService.findOne(decoded.id); 

      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }

      req.user = user; 
      next();
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
