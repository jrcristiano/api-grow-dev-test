import findUserByEmailUseCase from "../../../application/use-cases/users/find.user.by.email.use.case";
import BadRequestError from "../errors/bad.request.error";

export const emailAlreadyUsedRule = async (email: string) => {
	const user = await findUserByEmailUseCase.execute(email);
	if (user) {
		return Promise.reject(`E-mail "${user.email}" already registered`);
	}
};

export const emailAlreadyUsedByUuidRule = async (email: string, uuid: string) => {
	const user = await findUserByEmailUseCase.execute(email);
	if (user?.email != null && user?.uuid != uuid) {
		throw new BadRequestError(`E-mail "${user?.email}" already registered`);
	}
};
