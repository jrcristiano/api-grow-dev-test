import userService from '../../../application/services/user.service';

export const UserAlreadyExistsRule = async (email: string) => {
	const user = await userService.findUserByEmail(email);
	if (user) {
		return Promise.reject(`E-mail "${user.email}" already exists`);
	}
};
