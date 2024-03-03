import { check } from 'express-validator';
import { cpfAlreadyUsedRule } from './rules/cpf.already.used.rule';
import { emailAlreadyUsedRule } from './rules/email.already.used.rule';
import { raAlreadyUsedRule } from './rules/ra.already.used.rule';

const fName = check('name').notEmpty()
    .withMessage('The field name is required.')
    .isString()
    .withMessage('The field name must be a string.')
    .isLength({
      min: 3,
      max: 255,
    })
    .withMessage('The field name must have between 3 and 255 characters.')
    .trim();

const lastname = check('lastname').notEmpty()
    .withMessage('The field lastname is required.')
    .isString()
    .withMessage('The field lastname must be a string.')
    .isLength({
      min: 3,
      max: 255,
    })
    .withMessage('The field lastname must have between 3 and 255 characters.')
    .trim();

const emailUserCreate = check('email').notEmpty()
	.withMessage('The field email is required.')
	.isEmail()
	.withMessage('The field email must be a valid e-mail address.')
	.isLength({
		min: 3,
		max: 255,
	})
	.withMessage('The field email must have between 3 and 255 characters.')
	.custom(emailAlreadyUsedRule)
	.trim();

const emailUserUpdate = check('email').notEmpty()
	.withMessage('The field email is required.')
	.isEmail()
	.withMessage('The field email must be a valid e-mail address.')
	.isLength({
		min: 3,
		max: 255,
	})
	.withMessage('The field email must have between 3 and 255 characters.')
	.trim();

const emailLogin = check('email').notEmpty()
	.withMessage('The field email is required.')
	.isEmail()
	.withMessage('The field email must be a valid e-mail address.')
	.isLength({
		min: 3,
		max: 255,
	})
	.withMessage('The field email must have between 3 and 255 characters.')
	.trim();

const ra = check('ra').notEmpty()
	.withMessage('The field RA is required.')
	.isLength({ min: 8, max: 8 })
	.withMessage('The field RA must have 8 characters.')
	.custom(raAlreadyUsedRule)
	.trim();

const cpf = check('cpf').notEmpty()
	.withMessage('The field CPF is required.')
	.isLength({
		min: 11,
		max: 11,
	})
	.withMessage('The field CPF must have 11 characters.')
	.custom(cpfAlreadyUsedRule)
	.trim();

const password = check('password').notEmpty()
    .withMessage('The field password is required.')
    .isString()
    .withMessage('The field password must be a string.')
    .isLength({
      min: 8,
      max: 255,
    })
    .withMessage('The field password must have between 8 and 255 characters.')
  	.trim();

const login = [
  emailLogin,
  password,
];

const createUser = [
  fName,
  lastname,
  emailUserCreate,
	ra,
	cpf,
  password,
];

const updateUser = [
  fName,
  lastname,
  emailUserUpdate,
  password,
];

export default { login, createUser, updateUser };
