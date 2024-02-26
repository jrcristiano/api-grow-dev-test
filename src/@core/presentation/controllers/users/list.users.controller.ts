import { Request, Response } from "express";
import UserService from "../../../application/services/user.service";
import HttpStatus from "../../../domain/enums/http.status";

class ListUserController {
	async execute(req: Request, res: Response) {
    return res.status(HttpStatus.OK).json({
			data: await UserService.getUserListWithoutPassword(),
		});
  }
}

export default new ListUserController;
