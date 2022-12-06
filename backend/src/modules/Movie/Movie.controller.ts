import { In } from "typeorm";
import { AppDataSource } from "../../services/Database";
import Movie from "./Movie.model";


interface createMoviePayload {
    name: string;
    year: number;
}

class MovieController {
    async create(payload: createMoviePayload){
        const movie = await AppDataSource.getRepository(Movie).save(payload);
        return movie;
    }
    async list(){
        const movies = await AppDataSource.getRepository(Movie).find({
            relations: ["categories"]
        });
        return movies;
    }
    async getById(id: number){
        const movie = await AppDataSource.getRepository(Movie).findOne({
            where: { id }
        });
        return movie;
    }


}

export default new MovieController();