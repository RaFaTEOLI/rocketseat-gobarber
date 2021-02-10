import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUserRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let fakeCacheProvider: FakeCacheProvider;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();
    createUser = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
  });

  it('should create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@hotmail.com',
      password: '12345678',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not create a new user with the same email', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@hotmail.com',
      password: '12345678',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@hotmail.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
