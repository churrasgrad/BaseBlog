import ICreateUserDTO from "../dtos/index";
import User from "../infra/typeorm/entities";

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  find_all(): Promise<User[] | undefined>;
  find_by_user_email(email: string): Promise<User | undefined>;
}
