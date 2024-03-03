import findUserByCpfUseCase from "../../../application/use-cases/users/find.user.by.cpf.use.case";


export const cpfAlreadyUsedRule = async (ra: string) => {
	const user = await findUserByCpfUseCase.execute(ra);
	if (user) {
		return Promise.reject(`CPF "${user.cpf}" already registered`);
	}
};
