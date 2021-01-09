import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repositories";
import ICreateUserDTO from "../dtos";
import User from "../infra/typeorm/entities";
import crypto from 'crypto'

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private users_repository: IUsersRepository
  ) {}

  public async create(data: ICreateUserDTO): Promise<User> {
    const verify_email = await this.users_repository.find_by_user_email(
      data.email
    );

    if (!verify_email) {
      throw new Error("The database already has an user with this email");
    }

    data.password = crypto.createHmac('sha256', data.password).digest('hex');

    const user = await this.users_repository.create(data);

    return user;
  }
}
