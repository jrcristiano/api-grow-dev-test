import { Router } from 'express';
import LoginController from '../../presentation/controllers/auth/login.controller';
import CreateUserController from '../../presentation/controllers/users/create.user.controller';
import DeleteUserController from '../../presentation/controllers/users/delete.user.controller';
import FindUserController from '../../presentation/controllers/users/find.user.controller';
import insertInitialUsersController from '../../presentation/controllers/users/insert.initial.users.controller';
import listUsersByEmailController from '../../presentation/controllers/users/list.users.by.email.controller';
import ListUsersController from '../../presentation/controllers/users/list.users.controller';
import UpdateUserController from '../../presentation/controllers/users/update.user.controller';
// import CheckJwtMiddleware from '../middlewares/check.jwt.middleware'; middleware for LOGIN
import ValidateUuid from '../middlewares/validate.uuid';
import UserValidation from '../validations/user.validation';

const router = Router();

router.post('/login', UserValidation.login, LoginController.execute);

router.post('/users/install', insertInitialUsersController.execute);

router.get('/users', ListUsersController.execute);
router.get('/users/:email/email', listUsersByEmailController.execute);
router.post('/users', UserValidation.createUser, CreateUserController.execute);
router.get('/users/:uuid', ValidateUuid.handle, FindUserController.execute);
router.put('/users/:uuid', ValidateUuid.handle, UserValidation.updateUser, UpdateUserController.execute);
router.delete('/users/:uuid', ValidateUuid.handle, DeleteUserController.execute);

export default router;
