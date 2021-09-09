import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    createdAt: Date;

    @Column({
        nullable: true
    })
    deletedAt: Date;

}