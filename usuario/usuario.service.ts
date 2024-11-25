import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './usuario.entity';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async validateUser(email: string, senha: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(senha, user.senha))) {
      return user; // Retorna o usuário se a senha estiver correta
    }
    return null; // Retorna null se a autenticação falhar
  }

  async login(email: string, senha: string) {
    const user = await this.validateUser(email, senha);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, userData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, userData);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.senha, 10);
      const user = this.userRepository.create({
        ...createUserDto,
        senha: hashedPassword,
      });
      return await this.userRepository.save(user);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao cadastrar usuário');
    }
  }
}
