import { Router } from 'express';
import { MovieController } from './controllers/movieController';
import { UserController } from './controllers/userController';


const routes = Router();


routes.post("/movie", new MovieController().createMovie);
routes.get("/movies", new MovieController().getAllMovies);
routes.delete("/movies/:movieId", new MovieController().deleteMovie);
routes.put("/movies/:movieId", new MovieController().updateMovie);


routes.post("/user", new UserController().createUser);
routes.post("/user/:idUser/profiles", new UserController().createProfile);
routes.get("/user/:idUser/profiles", new UserController().getProfiles);

export default routes;