import { Request, Response } from "express";
import insertInitialUsersUseCase from "../../../application/use-cases/users/insert.initial.users.use.case";
import HttpStatus from "../../../domain/enums/http.status";

class CreateUserController {
	async execute(req: Request, res: Response) {
		return res.status(HttpStatus.NO_CONTENT).json(await insertInitialUsersUseCase.execute());
	}
}

export default new CreateUserController;
