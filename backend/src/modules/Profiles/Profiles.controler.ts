import { AppDataSource } from "../../services/Database";
import User from "../User/User.model";
import Profile from "./Profiles.model";





interface CreateProfilePayload {
    profileName: string;
    profileUrlImage: string;
    user:User;
}

class ProfileController {
    async create(payload:CreateProfilePayload) {
        const profile = await AppDataSource.getRepository(Profile).save(payload)
        return profile;
    }

}

export default new ProfileController();