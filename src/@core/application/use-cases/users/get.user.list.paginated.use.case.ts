import userService from "../../services/user.service";

class GetUserListPaginatedUseCase {
	async execute(page: number, perPage: number) {
		return userService.getUserListPaginated(page, perPage);
	}
}

export default new GetUserListPaginatedUseCase;
