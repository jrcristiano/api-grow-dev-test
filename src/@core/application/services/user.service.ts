
import { UserEntity } from "../../domain/entities/user.entity";
import User from "../../infra/db/entities/user.entity";
import AbstractService from "./abstract.service";

class UserService extends AbstractService<User> {
  constructor() {
    super(User);
  }

	async getUserListPaginated(page: number, perPage: number) {
		const skip = (page - 1) * perPage;

		const users = await this.repository.find({
      skip,
      take: perPage,
    });

		return users.map((user: User) => UserEntity.create(user).getUserWithoutPassword());
	}

	async createUser(user: User) {
		const createdUser = UserEntity.create(user);
		await this.repository.insert(createdUser.getUser());

		return createdUser.getUserWithoutPassword();
	}

	async updateUser(uuid: string, user: User) {
		return this.repository.update(uuid, UserEntity.create(user).getUserUpdate());
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

	async findUserByUuId(uuid: string) {
		const user = await this.repository.findOneOrFail({
			where: {
				uuid,
			}
		});

		return UserEntity.create(user).getUserWithoutPassword();
	}
}

export default new UserService;
