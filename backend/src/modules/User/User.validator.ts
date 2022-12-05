import { NextFunction, Request, Response } from "express";

class UserValidator {
    async validateCreateUserPayload(req: Request, res: Response, next: NextFunction){
        const { name, email, password } = req.body;
        if(!name) {return res.status(400).send({ok:false, message:"Nome obrigatório"})};
        if(!email) {return res.status(400).send({ok:false, message:"Email obrigatório"})};
        if(!password) {return res.status(400).send({ok:false, message:"Password obrigatorio"})};
        next();
    }
}

export default new UserValidator();