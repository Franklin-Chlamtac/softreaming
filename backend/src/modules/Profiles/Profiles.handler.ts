import { Request, Response } from "express";
import { AppDataSource } from "../../services/Database";
import User from "../User/User.model";
import ProfilesControler from "./Profiles.controler";



class ProfileHandler {
    async handleCreateRequest(req: Request, res: Response) {
        const { profileName, profileUrlImage } = req.body;
        const { userId } = req.params;
        const user = res.locals.user as User;

   
        try {
            const profile = await ProfilesControler.create({
                profileName,
                profileUrlImage,
                user
            });
            
            return res.status(201).json({ok:true, message:"Perfil criado com sucesso.",profile});

        } catch (error) {
            console.log(error, "Erro ao criar Perfil.")
            return res.status(500).json({ok:false, message: "Internal error creating profile."})
            
        }
    }
}

export default new ProfileHandler();