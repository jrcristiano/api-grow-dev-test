import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Role from "../../../domain/enums/role.enum";

@Entity('users')
export default class UserEntity extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
    uuid?: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    lastname: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

		@Column({ nullable: false, default: Role.STUDENT })
    role: string;

    @Column({ type: 'timestamp', name: 'created_at', nullable: false, default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt?: Date;

    @Column({ type: 'timestamp', name: 'updated_at', nullable: false, default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt?: Date;
}
