import { Request, Response } from "express";
import { AppDataSource } from "../../services/Database";
import UserController from "./User.controller";
import User from "./User.model";


class UserHandler {
    async handleCreateRequest(req: Request, res: Response){
        const { name, email, password } = req.body;
        try {
            const user = await UserController.create({ name, email, password });
            return res.status(201).json({ ok: true, message:"usuário criado.", user});
        } catch (error) {
            console.log(error,"olha o erro criando o user");
            return res.status(500).json({ ok: false, message: "erro aqui manito, não criou"});
        }

    }

}

export default new UserHandler();