import bcrypt from 'bcrypt';

export function hash(password: string) {
	return bcrypt.hashSync(password, Number(process.env.API_PASSWORD_SALT));
}

export function check(password: string, encryptedPassword: string) {
	return bcrypt.compareSync(password, encryptedPassword);
}
