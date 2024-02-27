import findUserByEmailUseCase from "../../../application/use-cases/users/find.user.by.email.use.case";

export const UserAlreadyExistsRule = async (email: string) => {
	const user = await findUserByEmailUseCase.execute(email);
	if (user) {
		return Promise.reject(`E-mail "${user.email}" already exists`);
	}
};
