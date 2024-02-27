import { Request, Response } from "express";
import { validationResult } from "express-validator";
import createUserUseCase from "../../../application/use-cases/users/create.user.use.case";
import HttpStatus from "../../../domain/enums/http.status";
import UserEntity from "../../../infra/db/entities/user.entity";

class CreateUserController {
	async execute(req: Request, res: Response) {
		const errors = validationResult(req);
		if (errors.isEmpty() === false) {
			return res.status(HttpStatus.BAD_REQUEST).json({
				validationErrors: errors.array(),
			});
		}

		const user = req.body as UserEntity;

		return res.status(HttpStatus.CREATED).json(await createUserUseCase.execute(user));
	}
}

export default new CreateUserController;
