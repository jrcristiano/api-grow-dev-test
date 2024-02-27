import userService from "../../services/user.service";

class FindUserByUuidUseCase {
	async execute(uuid: string) {
		return userService.findUserByUuId(uuid);
	}
}

export default new FindUserByUuidUseCase;
