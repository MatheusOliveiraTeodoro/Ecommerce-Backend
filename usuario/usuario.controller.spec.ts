import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './usuario.controller';
import { UserService } from './usuario.service';
import { User } from './usuario.entity';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([{ id: 1, nome: 'Test User', email: 'test@example.com', ativo: true }]),
            findOne: jest.fn().mockResolvedValue({ id: 1, nome: 'Test User', email: 'test@example.com', ativo: true }),
            create: jest.fn().mockResolvedValue({ id: 1, nome: 'Test User', email: 'test@example.com', ativo: true }),
            update: jest.fn().mockResolvedValue({ id: 1, nome: 'Updated User', email: 'updated@example.com', ativo: true }),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('deve retornar uma lista de usuários', async () => {
    const result = await userController.findAll();
    expect(result).toEqual([{ id: 1, nome: 'Test User', email: 'test@example.com', ativo: true }]);
    expect(userService.findAll).toHaveBeenCalled();
  });

  it('deve retornar um único usuário', async () => {
    const result = await userController.findOne(1);
    expect(result).toEqual({ id: 1, nome: 'Test User', email: 'test@example.com', ativo: true });
    expect(userService.findOne).toHaveBeenCalledWith(1);
  });

  it('deve criar um usuário', async () => {
    const newUser = { nome: 'Test User', email: 'test@example.com', senha: 'password123' };
    const result = await userController.create(newUser);
    expect(result).toEqual({ id: 1, nome: 'Test User', email: 'test@example.com', ativo: true });
    expect(userService.create).toHaveBeenCalledWith(newUser);
  });

  it('deve atualizar um usuário', async () => {
    const updatedUser = { nome: 'Updated User', email: 'updated@example.com' };
    const result = await userController.update(1, updatedUser);
    expect(result).toEqual({ id: 1, nome: 'Updated User', email: 'updated@example.com', ativo: true });
    expect(userService.update).toHaveBeenCalledWith(1, updatedUser);
  });

  it('deve remover um usuário', async () => {
    await userController.remove(1);
    expect(userService.remove).toHaveBeenCalledWith(1);
  });
});
