import UserEntity from "../../../infra/db/entities/user.entity";
import userService from "../../services/user.service";

class UpdateUserByUuidUseCase {
	async execute(uuid: string, user: UserEntity) {
		return userService.updateUser(uuid, user);
	}
}

export default new UpdateUserByUuidUseCase;
