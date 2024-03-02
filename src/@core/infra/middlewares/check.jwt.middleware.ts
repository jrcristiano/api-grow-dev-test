import { NextFunction, Request, Response } from "express";
import jwt, { VerifyErrors } from 'jsonwebtoken';
import env from "../../../../env";
import HttpStatus from "../../domain/enums/http.status";
import JwtDecoded from "../../domain/interfaces/jwt.decoded.interface";

class CheckJwtMiddleware {
  handle(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization;
    if (!token) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'No token provided.',
      })
    }

    jwt.verify(token, env.API_SECRET_TOKEN, function (err: VerifyErrors, decoded: JwtDecoded) {
      if (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Failed to authenticate token.'
        });
      }

      req.user = decoded.user;
      next();
    });
  }
}

export default new CheckJwtMiddleware;
