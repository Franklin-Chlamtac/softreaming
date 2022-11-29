import express from "express";
import ProfileRouter from "./modules/Profiles/Profile.Router";
import UserRouter from "./modules/User/User.Router";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());
app.use(`/user`, UserRouter());
app.use(`/profile`, ProfileRouter());


export { app }; 