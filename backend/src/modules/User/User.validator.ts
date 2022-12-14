import { NextFunction, Request, Response } from "express";
import UserController from "./User.controller";

class UserValidator {
    async validateCreateUserPayload(req: Request, res: Response, next: NextFunction){
        const { name, email, password } = req.body;
        const checkEmail = await UserController.getUserByEmail(email);
        if(checkEmail && checkEmail!= email){return res.status(400).send({ok:false, message:"Email já utilizado."})}
        if(!name) {return res.status(400).send({ok:false, message:"Nome obrigatório"})};
        if(!email) {return res.status(400).send({ok:false, message:"Email obrigatório"})};
        if(!password) {return res.status(400).send({ok:false, message:"Password obrigatorio"})};
        next();
    }

}

export default new UserValidator();