import CreateUserService from "../../../services/CreateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";
import FindAllUsersService from "../../../services/FindAllUsersService";

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const create_user = container.resolve(CreateUserService);

    const user = await create_user.create(request.body);

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const find_users = container.resolve(FindAllUsersService);

    const users = await find_users.find_all();

    return response.json(users);
  }
}
