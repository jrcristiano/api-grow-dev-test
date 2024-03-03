import userService from "../../services/user.service";

class FindUserByCpfUseCase {
	async execute(cpf: string) {
		return userService.findUserByCpf(cpf);
	}
}

export default new FindUserByCpfUseCase;
