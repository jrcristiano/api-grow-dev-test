
import {
	DeleteResult,
	EntityTarget,
	FindOptionsWhere,
	Repository,
	UpdateResult
} from "typeorm";
import { AppDataSource } from "../../data-source";

abstract class AbstractService<Entity> {
	protected readonly repository: Repository<Entity>;

	constructor(entity: EntityTarget<Entity>) {
		this.repository = AppDataSource.getRepository(entity);
	}

	async getAll(): Promise<Entity[]> {
		return await this.repository.find();
	}

	async create(data: Entity): Promise<Entity> {
		return await this.repository.save<Entity>(data);
	}

	async findById(uuid: string): Promise<Entity> {
		return await this.repository.findOneByOrFail({ uuid } as FindOptionsWhere<any>);
	}

	async update(uuid: string, data: Entity): Promise<UpdateResult> {
		return await this.repository.update(uuid, data as FindOptionsWhere<any>);
	}

	async sendDataToTrash(uuid: string) {
		return await this.repository.softDelete(uuid);
	}

	async delete(uuid: string): Promise<DeleteResult> {
		return await this.repository.delete({ uuid } as FindOptionsWhere<any>);
	}
}

export default AbstractService;
