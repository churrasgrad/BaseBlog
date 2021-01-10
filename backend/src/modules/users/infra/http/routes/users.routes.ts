import UsersController from "../controllers/UsersController";
import { Router } from "express";

const users_controller = new UsersController();
const users_router = Router();

users_router.post("/", users_controller.create);
users_router.get("/", users_controller.index);

export default users_router;
