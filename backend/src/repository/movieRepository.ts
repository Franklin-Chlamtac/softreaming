import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movie"
export const movieRepository = AppDataSource.getRepository(Movie)