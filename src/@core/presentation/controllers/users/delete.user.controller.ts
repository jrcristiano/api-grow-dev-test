import { Request, Response } from "express";
import deleteUserByUuidUseCase from "../../../application/use-cases/users/delete.user.by.uuid.use.case";
import HttpStatus from "../../../domain/enums/http.status";

class DeleteUserController {
	async execute({ params }: Request, res: Response) {
		await deleteUserByUuidUseCase.execute(params.uuid);

		return res.status(HttpStatus.OK).json({
			message: `User ${params.uuid} removed successfully.`,
		});
  }
}

export default new DeleteUserController;
