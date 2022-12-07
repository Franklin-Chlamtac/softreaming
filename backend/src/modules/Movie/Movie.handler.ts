import { Request, Response } from "express";
import { AppDataSource } from "../../services/Database";
import CategoryController from "../Category/Category.controller";
import User, { UserRole } from "../User/User.model";
import MovieController from "./Movie.controller";
import Movie from "./Movie.model";

class MovieHandler{
    async handleCreateRequest(req: Request, res: Response) {
        const { name, year } = req.body;
        const requestingUser = res.locals.user as User;
        if(requestingUser.role != UserRole.ADMIN){
            return res.status(401).json({ok:false, message:"Apenas admins podem fazer essa ação."})
        }

        try {
            const movie = await MovieController.create({ name, year });
            res.status(200).json({ok: true, movie})
        } catch (error) {
            console.log(error,"erro ao tentar criar filme.")
            res.status(400).json({ok:false, message:"Erro ao tentar criar filme."})
        }
 
    }

    async handleListRequest(req: Request, res:Response) {
        try {
            const movies = await MovieController.list();
            res.status(200).json({ok:true, movies});
        } catch (error) {
            res.status(500).json({ok:false, message:"erro ao listar filmes."})
        }
    }

    async handleUpdateRequest(req: Request, res:Response){
        const { categories_ids, year, name } = req.body;
        try {
            const movieUpdate = await MovieController.getById(Number(req.params.movie_id));
            if(!movieUpdate){
                return res.status(404).json({ok:false, message: "filme não encontrado"});
            }
            if (name){
                movieUpdate.name=name;
            }
            if (year){
                movieUpdate.year = year;
            }
            if (categories_ids){
                const categories = await CategoryController.listByIds(categories_ids)
                movieUpdate.categories = categories;
            }
            await AppDataSource.getRepository(Movie).save(movieUpdate);
            return res.status(200).json({ok:true, movieUpdate});

        } catch (error) {
            res.status(500).json({ok:false, message:"erro ao atualizar filme."})
        }
    }
}

export default new MovieHandler();