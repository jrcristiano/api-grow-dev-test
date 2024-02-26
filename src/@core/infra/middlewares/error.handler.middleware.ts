import { NextFunction, Request, Response } from "express";
import HttpStatus from "../../domain/enums/http.status";

class ErrorHandlerMiddleware {
	handler({ message }: Error,
		req: Request,
		res: Response,
		next: NextFunction,
	) {
		return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
			message
		});
	}
}

export default new ErrorHandlerMiddleware;
