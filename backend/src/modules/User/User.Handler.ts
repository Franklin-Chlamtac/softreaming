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

    async handleListRequest(req: Request, res: Response){
        try {
            const ListUsers = await UserController.list();
            res.status(200).json({ok: true, ListUsers})
        
        } catch (error) {
            console.log(error, "erro denovo bicho")
            res.status(500).json({ok: true, error})
            
        }
    }

    async handleUpdateRequest(req: Request, res: Response){
        try {
            const user = await UserController.getById(Number(req.params.user_id));
            if(!user){
                return res.status(404).json({ok: false, message: "usuario não encontrado"})
            }
            return user;

        } catch (error) {
            console.log("erro doido")
            
        }
    }
}

export default new UserHandler();