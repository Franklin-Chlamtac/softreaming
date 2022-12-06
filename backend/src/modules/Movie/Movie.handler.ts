import { Request, Response } from "express";
import { AppDataSource } from "../../services/Database";
import MovieController from "./Movie.controller";
import Movie from "./Movie.model";

class MovieHandler{
    async handleCreateRequest(req: Request, res: Response) {
        const { name, year } = req.body;

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
}

export default new MovieHandler();