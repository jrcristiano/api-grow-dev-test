import { faker } from '@faker-js/faker';
import Role from "../../../domain/enums/role.enum";
import createUserUseCase from "./create.user.use.case";

class InsertInitialUsersUseCase {
	async execute() {
		const usersToAdd = 50;

		const role = Role.STUDENT;

		for (let i = 0; i < usersToAdd; i++) {
			const firstName = faker.person.firstName();
			const lastName = faker.person.lastName();
			const email = faker.internet.email();
			const cpf = faker.number.bigInt({ min: 10000000000, max: 99999999999 }).toString();
			const ra = faker.number.bigInt({ min: 10000000, max: 99999999 }).toString();
			const password = '12345678';

			await createUserUseCase.execute({
				name: firstName,
				lastname: lastName,
				email: email,
				cpf: cpf,
				ra: ra,
				password: password,
				role,
			} as any);
		}

		await createUserUseCase.execute({
			name: 'aluno',
			lastname: 'teste',
			email: 'aluno.teste@server.com',
			cpf: '17294905738',
			ra: '85472156',
			password: '12345678',
			role,
		} as any);
	}
}

export default new InsertInitialUsersUseCase;
