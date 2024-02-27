import userService from "../../services/user.service";

class DeleteUserByUuidUseCase {
	async execute(uuid: string) {
		return userService.delete(uuid);
	}
}

export default new DeleteUserByUuidUseCase;
