import { Request, Response } from "express";
import findUserByUuidUseCase from "../../../application/use-cases/users/find.user.by.uuid.use.case";
import HttpStatus from "../../../domain/enums/http.status";

class FindUserController {
	async execute({ params }: Request, res: Response) {
		const user = await findUserByUuidUseCase.execute(params.uuid);
		if (!user) {
			return res.status(HttpStatus.NOT_FOUND).json({
				message: `User ${params.uuid} not found!`,
			})
		}

		return res.status(HttpStatus.OK).json(user);
  }
}

export default new FindUserController;
