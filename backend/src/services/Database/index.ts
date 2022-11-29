import { DataSource } from "typeorm";
import "dotenv/config";

require("dotenv").config({ path: process.env.PWD + "/.env" });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5433,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        process.env.NODE_ENV === "production"
        ? "dist/src/modules/**/*.model.js"
        : "src/modules/**/*.model.ts"
    ],
    migrations: [process.env.NODE_ENV === "production"
    ? "dist/src/migrations/*.js"
    : "src/migrations/*.ts"],

});