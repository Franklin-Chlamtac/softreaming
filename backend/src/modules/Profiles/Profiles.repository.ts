import { AppDataSource } from "../../services/Database";
import { Profile } from "./Profiles.model";


export const profileRepository = AppDataSource.getRepository(Profile);


