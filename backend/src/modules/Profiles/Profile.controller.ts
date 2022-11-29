import { profileRepository } from "./Profiles.repository";


interface CreateProfilePayload {
    name: string;
    imageURL: string;
}

class ProfileController {
    
    async create(payload:CreateProfilePayload){
        const newProfile = await profileRepository.save(payload);
        return newProfile;
    }
    async list(){
        const listProfiles = await profileRepository.find();
        return listProfiles;
    }

}

export default new ProfileController();