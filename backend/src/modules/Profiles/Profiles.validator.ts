import { NextFunction, Request, Response } from "express";
import UserController from "../User/User.controller";



class ProfileValidator {
    async validateCreateProfilePayload(req: Request, res: Response, next:NextFunction){
        const { profileName, profileUrlImage } = req.body;
        if(!profileName){return res.status(400).send({ok:false, message:"Nome obrigatório"})};
        if(!profileUrlImage){return res.status(400).send({ok:false, message:"URL da imagem obrigatório"})};
        const user = await UserController.getUserById(+req.params.userId);
        if(!user){
            return res.status(404).json({ok:false, message:"Usuário não encontrado."});  
        }
        res.locals.user = user;
        next();
    }
}

export default new ProfileValidator();