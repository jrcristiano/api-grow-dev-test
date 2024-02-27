import { Request, Response } from "express";
import countUserListUseCase from "../../../application/use-cases/users/count.user.list.use.case";
import getUserListPaginatedUseCase from "../../../application/use-cases/users/get.user.list.paginated.use.case";
import HttpStatus from "../../../domain/enums/http.status";
import { getLastPage, getPrevPage, pagination } from "../../../infra/utils/pagination.util";

class ListUserController {
	async execute(req: Request, res: Response) {
		const { currentPage, perPage } = pagination(req);

		const users = await getUserListPaginatedUseCase.execute(currentPage, perPage);

    return res.status(HttpStatus.OK).json({
			data: users,
			pagination: {
				total: users.length,
				currentPage,
				prevPage: getPrevPage(currentPage),
				lastPage: getLastPage(req, await countUserListUseCase.execute()),
				perPage,
			}
		});
  }
}

export default new ListUserController;
