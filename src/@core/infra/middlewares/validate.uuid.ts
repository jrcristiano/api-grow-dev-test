import { NextFunction, Request, Response } from 'express';
import HttpStatus from '../../domain/enums/http.status';
import { isValidUuid } from '../utils/uuid.util';

class ValidateUuid {
	handle(req: Request, res: Response, next: NextFunction) {
		const { uuid } = req.params;

		if (!isValidUuid(uuid)) {
			return res.status(HttpStatus.BAD_GATEWAY).json({ error: 'Invalid UUID format' });
		}

		next();
	}
}

export default new ValidateUuid;
