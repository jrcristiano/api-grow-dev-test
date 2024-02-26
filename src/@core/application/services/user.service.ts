
import { UserEntity } from "../../domain/entities/user.entity";
import User from "../../infra/db/entities/user.entity";
import AbstractService from "./abstract.service";

class UserService extends AbstractService<User> {
  constructor() {
    super(User);
  }

	async createUser(user: User) {
		const createdUser = UserEntity.create(user);
		await this.repository.insert(createdUser.getUser());

		return createdUser.getUserWithoutPassword();
	}

	async updateUser(uuid: string, user: User) {
		return this.repository.update(uuid, UserEntity.create(user).getUser());
	}

  async findUserByEmail(email: string) {
    return await this.repository.findOne({
      where: { email },
    });
  }

	async getUserListWithoutPassword() {
		const users = await this.repository.find();
		return users.map((user: User) => UserEntity.create(user).getUserWithoutPassword())
	}

	async findUserById(uuid: string) {
		const user = await this.repository.findOneOrFail({
			where: {
				uuid,
			}
		});

		return UserEntity.create(user).getUserWithoutPassword();
	}
}

export default new UserService;
