import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import BaseEntity from "./baseEntity";

@Entity("Users")
export class User extends BaseEntity {

    @Column({
        nullable: false
    })
    fullName: string;

    @Column({
        nullable: false
    })
    mailAddress: string;
    
    @Column({
        nullable: false
    })
    password: string;
    
    @Column({
        nullable: false
    })
    passwordSalt: string;
    
    @Column({
        nullable: false
    })
    isVerified: boolean;
    
    @Column({
        nullable: true
    })
    birthDate: Date;
    

}
