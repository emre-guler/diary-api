import { Entity, OneToMany } from "typeorm";
import { Diary } from "./Diary";
import { UserFriend } from "./UserFriend";
import BaseEntity from './baseEntity';

@Entity("DiaryTaggedFriends")
export class DiaryTaggedFriend extends BaseEntity {
    @OneToMany(type => Diary, diary => diary.id, {
        nullable: false
    })
    diaryId: number;

    @OneToMany(type => UserFriend, friend => friend.id)
    friendId: number;
}