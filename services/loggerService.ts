import { autoInjectable } from "tsyringe";
import { createConnection } from "typeorm";
import { LogLevels } from "../enums/LogLevels";
import { Log } from "../src/entities/Log";

@autoInjectable()
export default class loggerService {
    createLog = async (title, message, level = LogLevels.Error) => {
        let log = new Log();
        log.title = title;
        log.message = message;
        log.level = level;
        log.createdAt = new Date();
    }
}