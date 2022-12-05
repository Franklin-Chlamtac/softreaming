import { Request, Response } from "express";
import UserController from "./User.controller";


class UserHandler {
    async handleCreateRequest(req: Request, res: Response){
        const { name, email, password } = req.body;
        try {
            const user = await UserController.create({ name, email, password });
            return res.status(201).json({ ok: false, message:"usuário criado.", user});
        } catch (error) {
            console.log(error,"olha o erro");
            return res.status(500).json({ ok: false, message: "erro aqui manito, não criou"});
        }

    }
}

export default new UserHandler();