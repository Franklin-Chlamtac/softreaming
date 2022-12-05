import express from "express";
import UserRouter from "./modules/User/User.router";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());
app.use(`/user`, UserRouter());

export { app }; 