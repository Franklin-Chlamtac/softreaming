import express from "express";
import UserRouter from "./modules/User/User.router";
import cors from "cors";
import MovieRouter from "./modules/Movie/Movie.router";
import CategoryRouter from "./modules/Category/Category.router";

const app = express();

app.use(express.json());
app.use(cors())
app.use(express.json());
app.use(`/user`, UserRouter());
app.use(`/movies`, MovieRouter());
app.use(`/categories`, CategoryRouter());


export { app }; 