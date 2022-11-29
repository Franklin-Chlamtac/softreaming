import { userRepository }from "./User.repository";


interface CreateUserPayload {
    userName: string;
    email: string;
    password: string;
}

class UserController {
    async create(payload: CreateUserPayload){
        const newUser = await userRepository.save(payload);
        return newUser;
    }

    async list(){
        const listUsers = await userRepository.find();
        return listUsers;
    }
}

export default new UserController();