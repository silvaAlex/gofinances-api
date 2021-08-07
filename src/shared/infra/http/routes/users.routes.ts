import { AuthenticateUserController } from "@modules/users/useCases/auth/AuthenticateUserController";
import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";
import { Router } from "express";

const userRoutes = Router();
const createUserController = new CreateUserController();
const authUserController = new AuthenticateUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.post('/auth', authUserController.handle);

export { userRoutes };
