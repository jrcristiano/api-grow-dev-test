import { Request, Response } from "express";
import getUserListByEmailPaginatedUseCase from "../../../application/use-cases/users/get.user.list.by.email.paginated.use.case";
import HttpStatus from "../../../domain/enums/http.status";
import { getLastPage, getNextPage, getPrevPage, pagination } from "../../../infra/utils/pagination.util";

class ListUsersByEmailController {
	async execute(req: Request, res: Response) {
		const { email } = req.query as any;
		const { currentPage, perPage } = pagination(req);

		const users = await getUserListByEmailPaginatedUseCase.execute(
			email,
			currentPage,
			perPage,
		);

    return res.status(HttpStatus.OK).json({
			data: users,
			pagination: {
				total: users.length,
				currentPage,
				prevPage: getPrevPage(currentPage),
				nextPage: getNextPage(currentPage),
				lastPage: getLastPage(req, users.length),
				perPage,
			}
		});
  }
}

export default new ListUsersByEmailController;
