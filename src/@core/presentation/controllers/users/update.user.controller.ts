import { Request, Response } from "express";
import { validationResult } from "express-validator";
import UserService from "../../../application/services/user.service";
import HttpStatus from "../../../domain/enums/http.status";
import UserEntity from "../../../infra/db/entities/user.entity";
import { hash } from "../../../infra/utils/bcrypt.util";

class UpdateUserController {
	async execute(req: Request, res: Response) {
		const errors = validationResult(req);
		if (errors.isEmpty() === false) {
			return res.status(HttpStatus.BAD_REQUEST).json({
				message: errors.array(),
			})
		}

		const body = req.body as UserEntity;
		if (body.password) {
			body.password = hash(body.password);
		}

		await UserService.update(req.params.uuid, req.body);
		return res.status(HttpStatus.OK).json({
			message: `User ${req.params.uuid} updated successfully.`,
		});
  }
}

export default new UpdateUserController;
