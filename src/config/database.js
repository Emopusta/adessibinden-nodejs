import { Sequelize } from "sequelize";
import {development} from "./connection.js";

export const sequelize = new Sequelize(
    development.database,
    development.username,
    development.password,{
        host : development.host,
        dialect : development.dialect,
        pool:{
            max: 5,
            min: 0,
            idle: 10000
        },
    }
)


