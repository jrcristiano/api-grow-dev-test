import { Router } from 'express';
import LoginController from '../../presentation/controllers/auth/login.controller';
import CreateUserController from '../../presentation/controllers/users/create.user.controller';
import DeleteUserController from '../../presentation/controllers/users/delete.user.controller';
import FindUserController from '../../presentation/controllers/users/find.user.controller';
import insertInitialUsersController from '../../presentation/controllers/users/insert.initial.users.controller';
import ListUsersController from '../../presentation/controllers/users/list.users.controller';
import UpdateUserController from '../../presentation/controllers/users/update.user.controller';
import CheckJwtMiddleware from '../middlewares/check.jwt.middleware';
import ValidateUuid from '../middlewares/validate.uuid';
import UserValidation from '../validations/user.validation';

const router = Router();

router.post('/login', UserValidation.login, LoginController.execute);

router.post('/users/install', insertInitialUsersController.execute);

router.get('/users', CheckJwtMiddleware.handler, ListUsersController.execute);
router.post('/users', CheckJwtMiddleware.handler, UserValidation.handle, CreateUserController.execute);
router.get('/users/:uuid', CheckJwtMiddleware.handler, ValidateUuid.handle, FindUserController.execute);
router.put('/users/:uuid', CheckJwtMiddleware.handler, ValidateUuid.handle, UserValidation.handle, UpdateUserController.execute);
router.delete('/users/:uuid', CheckJwtMiddleware.handler, ValidateUuid.handle, DeleteUserController.execute);

export default router;
