import jwt from 'jsonwebtoken';
import { env } from 'process';

export function jwtSign(obj: object) {
	return jwt.sign({ obj }, env.API_SECRET_TOKEN, {
		expiresIn: env.API_TOKEN_EXPIRES_IN,
	});
}
