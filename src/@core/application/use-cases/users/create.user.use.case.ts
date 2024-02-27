import UserEntity from "../../../infra/db/entities/user.entity";
import userService from "../../services/user.service";

class CreateUserUseCase {
	async execute(user: UserEntity) {
		return userService.createUser(user);
	}
}

export default new CreateUserUseCase;
