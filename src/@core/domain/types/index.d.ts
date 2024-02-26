import UserInterface from "../interfaces/user.interface";

export { };

declare global {
  namespace Express {
    interface Request {
      user: UserInterface;
    }
  }
}
