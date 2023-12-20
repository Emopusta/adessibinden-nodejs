import dotenv from "dotenv";
dotenv.config();

 export const development = {
    database: 'adessibindenNodeDb',
    username : 'postgres',
    password : process.env.DB_PASS,
    host : 'localhost',
    dialect: 'postgres'
}


