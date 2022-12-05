import { Request, Response } from "express";
import UserController from "../../modules/User/User.controller";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";



interface AuthSignPayload{
    id: number;
}


class AuthService{
    async authenticate(req: Request, res: Response){
        const { email, password } = req.body;
        if(!password){
            return res.status(400).json({ok: false, message:"Senha inválida"});

        }
        if(!email){
            return res.status(400).json({ok: false, message:"Email inválido"});
        }

        try {
            const user = await UserController.getUserByEmail(email);
            if(!user){
                return res.status(400).json({ok: false, message:"Usuário não encontrado"});             
            }
            if(!bcrypt.compareSync(password, user.password_hash)){
                return res.status(400).json({ok:false, message:"Senha invalida"});
            }

            const token = jwt.sign({id:user.id} as AuthSignPayload, `${process.env.JWT_SECRET}`);
            return res.status(200).json({ok: true, token})
            
        } catch (error) {
            console.log(error, "erro na auth do token")
            return res.status(400).json({ok: false, message:"erro de auth no token"})
        }
    }
    async checkToken(req: Request, res: Response, next: any){
        const authHeader = req.headers["authorization"];
        if(!authHeader){
            return res.status(401).json({ok:false, message:"cadê o token???"});
        }

        try {
            const token = authHeader.split(" ")[1];
            if(!token){
                return res.status(401).json(({ok: false, message:"cadÊ o token malandro"}));
            }
    
            const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as AuthSignPayload;
    
            const user = await UserController.getUserById(decoded.id);
            if(!user){
                return res.status(401).json({ok:false, message:"token inválido"});
            }
            return res.locals.user = user;
            next();
        } catch (error) {
            console.log(error, "erro token");
            return res.status(401).json({ok:false, message:"erro na validação do token"});
        }


    }
}

export default new AuthService();