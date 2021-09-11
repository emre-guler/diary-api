import { Column, Entity, OneToMany } from "typeorm";
import { User } from "./User";
import BaseEntity from "./BaseEntity";

@Entity("UsersLoginHistory")
export class UserLoginHistroy extends BaseEntity {
    @OneToMany(type => User, user => user.id, {
        nullable: false
    })
    userId: string;

    @Column({
        nullable: true
    })
    ipAddress: string;

    @Column({
        nullable: true
    })
    device: string;

    @Column({
        nullable: true
    })
    location: string;
}