import { Entity, Column, OneToMany } from 'typeorm';
import { User } from './User';
import BaseEntity from './baseEntity';

@Entity('UserFriends')
export class UserFriend extends BaseEntity {
    @OneToMany(type => User, user => user.id, {
        nullable: false
    })
    userId: number;

    @Column({
        nullable: false
    })
    fullName: string;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        nullable: false,
        default: "/default-friend.png"
    })
    photoPath: string;
}