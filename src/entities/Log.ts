import { Column, Entity } from "typeorm";
import { LogLevels } from "../../enums/LogLevels";
import BaseEntity from "./BaseEntity";

@Entity("Log")
export class Log extends BaseEntity
{
    @Column({
        nullable: false
    })
    title: string;

    @Column({
        nullable: false
    })
    message: string;

    @Column({
        type: "enum",
        enum: LogLevels,
        default: LogLevels.Information,
        nullable: false
    })
    level: LogLevels;
}