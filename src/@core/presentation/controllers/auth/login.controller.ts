import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { env } from "process";
import findUserByEmailUseCase from "../../../application/use-cases/users/find.user.by.email.use.case";
import HttpStatus from "../../../domain/enums/http.status";
import UserInterface from "../../../domain/interfaces/user.interface";
import { check } from "../../../infra/utils/bcrypt.util";
import { jwtSign } from "../../../infra/utils/jwt.util";

class LoginController {
	async execute(req: Request, res: Response) {
		const { email, password } = req.body;

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(HttpStatus.BAD_GATEWAY).json({
				message: errors.array(),
			});
		}

		const user = await findUserByEmailUseCase.execute(email) as UserInterface;
		if (!user) {
			return res.status(HttpStatus.NOT_FOUND).json({
				message: 'User not found.',
			});
		}

		const verifyPassword = check(password, user.password);
		if (!verifyPassword) {
			return res.status(HttpStatus.FORBIDDEN).json({
				message: 'Incorrect password, please try again.',
			});
		}

		delete user.password;

		const token = jwtSign(user);

		return res.status(HttpStatus.OK).json({
			token,
			expiresIn: env.API_TOKEN_EXPIRES_IN,
		});
  }
}

export default new LoginController;
