import { Request, Response } from "express";
import UserController from "./User.controller";



class UserHandler {
    async handleCreateRequest(req: Request, res: Response){
        const { userName, email, password } = req.body;
        
        try {
            const createUser = await UserController.create({ userName, email, password })
            res.status(201).json({ok: true, createUser})
        } catch (error) {
            console.log(error, "deu erro aqui")
            res.status(500).json({ok: false, error})
        }
        
    }


}

export default new UserHandler();