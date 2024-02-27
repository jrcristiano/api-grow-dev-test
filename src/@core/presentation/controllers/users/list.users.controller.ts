import { Request, Response } from "express";
import getUserListPaginatedUseCase from "../../../application/use-cases/users/get.user.list.paginated.use.case";
import HttpStatus from "../../../domain/enums/http.status";

class ListUserController {
	async execute(req: Request, res: Response) {
    return res.status(HttpStatus.OK).json({
			data: await getUserListPaginatedUseCase.execute(req),
		});
  }
}

export default new ListUserController;
