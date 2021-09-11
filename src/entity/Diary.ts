import { Entity, Column, OneToMany } from 'typeorm';
import { User } from './User';
import { Feelings } from '../../enums/Feelings';
import { BookColors } from '../../enums/BookColor';
import BaseEntity from './baseEntity';

@Entity("Diaries")
export class Diary extends BaseEntity {
    @OneToMany(type => User, user => user.id, {
        nullable: false
    })
    userId: number;

    @Column({
        nullable: false
    })
    title: string;

    @Column("varchar(max)")
    content: string;

    @Column({
        type: "enum",
        enum: Feelings,
        default: Feelings.Nothing,
        nullable: false
    })
    feeling: Feelings;

    @Column({
        type: "enum",
        enum: BookColors,
        default: BookColors.Blue,
        nullable: false
    })
    bookColor: BookColors;

    @Column({
        nullable: false,
    })
    diaryDate: Date;
}