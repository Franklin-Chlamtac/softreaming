import { userRepository }from "./User.repository";


interface CreateUserPayload {
    userName: string;
    email: string;
    password: string;
}

interface ListUserPayload {
    name:string;
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

    async getById(id:number) {
        const user = await userRepository.findOne({
            where: { id },
        });
        return user;
    }

}

export default new UserController();