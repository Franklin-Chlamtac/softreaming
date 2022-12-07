import { Router } from "express";
import Authentication from "../../services/Authentication";
import MovieHandler from "./Movie.handler";

export default (): Router => {
    const router = Router();

    router.post('/', Authentication.checkToken, MovieHandler.handleCreateRequest);
    router.get('/', MovieHandler.handleListRequest);
    router.patch('/:movie_id', MovieHandler.handleUpdateRequest);
    return router;
}