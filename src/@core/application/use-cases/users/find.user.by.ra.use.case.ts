import userService from "../../services/user.service";

class FindUserByRaUseCase {
	async execute(ra: string) {
		return userService.findUserByRa(ra);
	}
}

export default new FindUserByRaUseCase;
