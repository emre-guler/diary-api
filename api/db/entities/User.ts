import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'typeorm';'./BaseEntity';

@Entity('user')
export class User extends BaseEntity {
    @Column()
    fullName: string;
    
    @Column()
    mailAddres: string;
    
    @Column()
    password: string;
    
    @Column()
    passwordSalt: string;
    
    @Column()
    IsVerified: boolean;
    
    @Column({
        nullable: true
    })
    BirthDate: Date;
    
}