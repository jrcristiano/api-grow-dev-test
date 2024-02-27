import Role from "../../../domain/enums/role.enum";
import createUserUseCase from "./create.user.use.case";

class InsertInitialUsersUseCase {
	async execute() {
		await createUserUseCase.execute({
			name: 'aluno',
			lastname: 'teste',
			email: 'aluno.teste@server.com',
			document: '12345678963',
			ra: '123456',
			password: '12345678',
			role: Role.STUDENT,
		} as any);
	}
}

export default new InsertInitialUsersUseCase;
