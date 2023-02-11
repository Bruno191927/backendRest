import { DataSource } from "typeorm";
import { User } from "../../components/user/model";
import dotenv from 'dotenv';
dotenv.config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities:[User],
    logging: true,
})

