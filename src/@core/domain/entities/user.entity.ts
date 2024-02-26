import { hash } from "../../infra/utils/bcrypt.util";
import { uuid } from "../../infra/utils/uuid.util";
import Role from "../enums/role.enum";

type UserProps = {
	uuid?: string;
	name: string;
	lastname: string;
	email: string;
	role?: string;
	password?: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export class UserEntity {
	private readonly props: UserProps;

	private constructor(props: UserProps) {
		this.props = props;
	}

	static create(props: UserProps) {
		return new UserEntity(props);
	}

	get uuid() {
		if (!this.props.uuid) {
			return uuid();
		}

		return this.props.uuid;
	}

	get name() {
		return (
			this.props.name.charAt(0).toUpperCase() +
			this.props.name.toLowerCase().slice(1)
		);
	}

	get lastname() {
		return (
			this.props.lastname.charAt(0).toUpperCase() +
			this.props.lastname.toLowerCase().slice(1)
		);
	}

	get email() {
		return this.props.email.toLowerCase();
	}

	get password() {
		return this.props.password ? hash(this.props.password) : undefined;
	}

	get role() {
		return this.props.role === Role.ADMIN ? 'ADMIN' : 'STUDENT';
	}

	get createdAt() {
		return this.props.createdAt;
	}

	get updatedAt() {
		return this.props.updatedAt;
	}

	getUser() {
		return {
			uuid: this.uuid,
			name: this.name,
			lastname: this.lastname,
			email: this.email,
			role: this.role,
			password: this.password,
		} as UserEntity;
	}

	getUserJson() {
		return JSON.stringify(this.getUser());
	}

	getUserWithoutPassword() {
		return {
			uuid: this.uuid,
			name: this.name,
			lastname: this.lastname,
			email: this.email,
			role: this.role,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		} as UserEntity;
	}

	getUserWithoutPasswordJson() {
		return JSON.stringify(this.getUserWithoutPassword())
	}
}
