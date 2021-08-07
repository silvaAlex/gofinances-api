import { ICreateUsersDTO } from '@modules/users/dtos/ICreateUsersDTO';
import { getRepository, Repository } from 'typeorm';
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {

  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {

   const user = await this.ormRepository.findOne({
     where: {
       email
     }
   });

   return user;

  }

  public async create(data: ICreateUsersDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }
}

export { UsersRepository }
