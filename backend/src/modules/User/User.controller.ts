import { AppDataSource } from "../../services/Database";
import User from "./User.model";
import bcrypt from "bcrypt";


interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
}

class UserController {
    async create(payload: CreateUserPayload) {
        const user = await AppDataSource.getRepository(User).save({
            ...payload,
            password_hash: bcrypt.hashSync(payload.password, bcrypt.genSaltSync(10)),
        })
        return user;
    }


    async getUserById(id: number){
        const user = await AppDataSource.getRepository(User).findOne({
            where: { id }
        });
        return user;
    }

    async getUserByEmail(email:string){
        const user = await AppDataSource.getRepository(User).findOne({
            where: { email }
        })
        return user;
    }
}

export default new UserController();