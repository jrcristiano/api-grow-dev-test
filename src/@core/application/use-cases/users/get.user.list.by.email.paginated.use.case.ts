import userService from "../../services/user.service";

class GetUserListByEmailPaginatedUseCase {
	async execute(email: string, page = 1, perPage = 10) {
		page = Number(page);
		perPage = Number(perPage);

		return userService.getUserListByEmailPaginated(email, page, perPage);
	}
}

export default new GetUserListByEmailPaginatedUseCase;
