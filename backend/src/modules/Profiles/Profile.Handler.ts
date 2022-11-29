import ProfileController from "./Profile.controller";
import { Request, Response } from "express";


class ProfileHandler {
    async handleCreateRequest(req: Request, res: Response){
        const { name, imageURL } = req.body;

        try {
            
            const createProfile = await ProfileController.create({ name, imageURL});

            res.status(201).json({ok: true, createProfile})
            
        } catch (error) {

            console.log(error, "olha o erro")
            res.status(500).json({ok:false, error})            
        }
    }

    async handleListRequest(req: Request, res: Response){
        try {
            const ListProfiles = await ProfileController.list();
            res.status(200).json({ok: true, ListProfiles})
        
        } catch (error) {
            console.log(error, "erro denovo bicho")
            res.status(500).json({ok: true, error})
            
        }
    }
}

export default new ProfileHandler();