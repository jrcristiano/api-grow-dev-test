import { Request } from "express";
import userService from "../../services/user.service";

class GetUserListPaginatedUseCase {
	async execute(req: Request) {
		return userService.getUserListPaginated(req);
	}
}

export default new GetUserListPaginatedUseCase;
