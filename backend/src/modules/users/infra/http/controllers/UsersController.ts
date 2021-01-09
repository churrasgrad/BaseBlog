import CreateUserService from "modules/users/services/CreateUserService";
import { container } from "tsyringe";

export default class UserController {

  public async create(request: Request, response: Response):Promise<Response> {
    const create_user = container.resolve(CreateUserService)
    const user = await create_user.create()
  }

}