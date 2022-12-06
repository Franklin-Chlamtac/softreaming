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
        const movies = await AppDataSource.getRepository(Movie).find();
        return movies;
    }
}

export default new MovieController();