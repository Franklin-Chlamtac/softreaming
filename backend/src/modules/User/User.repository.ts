import User from "./User.model";
import { AppDataSource } from "../../services/Database";


export const userRepository = AppDataSource.getRepository(User);