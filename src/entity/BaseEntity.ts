import { Column, PrimaryGeneratedColumn } from 'typeorm';

export default abstract class BaseEntity {
    
    @PrimaryGeneratedColumn ()
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