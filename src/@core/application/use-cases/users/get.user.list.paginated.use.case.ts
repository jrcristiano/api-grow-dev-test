import userService from "../../services/user.service";

class GetUserListPaginatedUseCase {
	async execute(page: number, perPage: number) {
		page = Number(page);
		perPage = Number(perPage);

		return userService.getUserListPaginated(page, perPage);
	}
}

export default new GetUserListPaginatedUseCase;
