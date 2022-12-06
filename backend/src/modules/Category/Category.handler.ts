import { Request, Response } from "express";
import CategoryController from "./Category.controller";

class CategoryHandler{
    async handleCreateRequest(req: Request, res: Response){
        const { name } = req.body;

        try {
            const category = await CategoryController.create({ name });
            res.status(200).json({ok: true, category})
        } catch (error) {
            console.log(error,"erro ao tentar criar categoria.")
            res.status(500).json({ok:false, message:"Erro ao tentar criar categoria."})
        }
    }

    async handleListRequest(req: Request, res: Response){
        try {
            const categories = await CategoryController.list();
            res.status(200).json({ok:false, categories})
        } catch (error) {
            res.status(500).json({ok:false, message:"erro ao listar categorias."})
        }
    }
}

export default new CategoryHandler();