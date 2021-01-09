import IUsersRepository from "../../../repositories/IUsersRepository";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async find_all(): Promise<User[] | undefined> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async find_by_user_email(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(email);

    return user;
  }
}
