import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './usuario.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './usuario.entity';
import { Repository } from 'typeorm';

const mockUserRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository, 
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar uma lista de usuários', async () => {
    const users = [{ id: 1, nome: 'Test User', email: 'test@example.com', ativo: true }];
    
    userRepository.find = jest.fn().mockResolvedValue(users);

    const result = await userService.findAll();
    expect(result).toEqual(users);
    expect(userRepository.find).toHaveBeenCalled();
  });

  it('deve retornar um único usuário', async () => {
    const user = { id: 1, nome: 'Test User', email: 'test@example.com', ativo: true };
    
    userRepository.findOne = jest.fn().mockResolvedValue(user);

    const result = await userService.findOne(1);
    expect(result).toEqual(user);
    expect(userRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('deve criar um novo usuário', async () => {
    const newUser = { nome: 'Test User', email: 'test@example.com', senha: 'password123' };
    const savedUser = { id: 1, ...newUser, ativo: true };

    userRepository.create = jest.fn().mockReturnValue(newUser);
    userRepository.save = jest.fn().mockResolvedValue(savedUser);

    const result = await userService.create(newUser);
    expect(result).toEqual(savedUser);
    expect(userRepository.create).toHaveBeenCalledWith(newUser);
    expect(userRepository.save).toHaveBeenCalledWith(newUser);
  });

  it('deve atualizar um usuário', async () => {
    const updatedUser = { nome: 'Updated User', email: 'updated@example.com' };
    const savedUser = { id: 1, ...updatedUser, ativo: true };

    userRepository.update = jest.fn().mockResolvedValue(undefined);
    userRepository.findOne = jest.fn().mockResolvedValue(savedUser);

    const result = await userService.update(1, updatedUser);
    expect(result).toEqual(savedUser);
    expect(userRepository.update).toHaveBeenCalledWith(1, updatedUser);
    expect(userRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('deve remover um usuário', async () => {
    userRepository.delete = jest.fn().mockResolvedValue(undefined);

    await userService.remove(1);
    expect(userRepository.delete).toHaveBeenCalledWith(1);
  });
});
