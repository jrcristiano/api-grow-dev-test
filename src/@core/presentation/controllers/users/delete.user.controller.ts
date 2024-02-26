import { Request, Response } from "express";
import UserService from "../../../application/services/user.service";
import HttpStatus from "../../../domain/enums/http.status";

class DeleteUserController {
	async execute({ params }: Request, res: Response) {
		await UserService.delete(params.uuid);

		return res.status(HttpStatus.OK).json({
			message: `User ${params.uuid} removed successfully.`,
		});
  }
}

export default new DeleteUserController;
