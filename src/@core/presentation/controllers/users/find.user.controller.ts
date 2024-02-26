import { Request, Response } from "express";
import UserService from "../../../application/services/user.service";
import HttpStatus from "../../../domain/enums/http.status";

class FindUserController {
	async execute({ params }: Request, res: Response) {
		const user = await UserService.findUserById(params.uuid);
		if (!user) {
			return res.status(HttpStatus.NOT_FOUND).json({
				message: `User ${params.uuid} not found!`,
			})
		}

		return res.status(HttpStatus.OK).json(user);
  }
}

export default new FindUserController;
