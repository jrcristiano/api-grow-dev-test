import userService from "../../services/user.service";

class FindUserByEmailUseCase {
	async execute(email: string) {
		return userService.findUserByEmail(email);
	}
}

export default new FindUserByEmailUseCase;
