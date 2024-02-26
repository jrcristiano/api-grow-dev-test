import { Request, Response } from "express";
import { validationResult } from "express-validator";
import UserService from "../../../application/services/user.service";
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

		return res.status(HttpStatus.CREATED).json(await UserService.createUser(user));
	}
}

export default new CreateUserController;
