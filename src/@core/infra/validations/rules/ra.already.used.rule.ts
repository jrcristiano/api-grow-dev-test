import findUserByRaUseCase from "../../../application/use-cases/users/find.user.by.ra.use.case";

export const raAlreadyUsedRule = async (ra: string) => {
	const user = await findUserByRaUseCase.execute(ra);
	if (user) {
		return Promise.reject(`RA "${user.ra}" already registered`);
	}
};
