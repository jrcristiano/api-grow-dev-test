import userService from "../../services/user.service";

class CountUserListUseCase {
	async execute() {
		return userService.count();
	}
}

export default new CountUserListUseCase;
