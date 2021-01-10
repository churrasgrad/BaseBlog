import { Router } from "express";

import users_router from "../../../../modules/users/infra/http/routes/users.routes";

const routes = Router();

routes.use("/users", users_router);

export default routes;
