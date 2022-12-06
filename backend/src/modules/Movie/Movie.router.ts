import { Router } from "express";
import MovieHandler from "./Movie.handler";

export default (): Router => {
    const router = Router();

    router.post('/', MovieHandler.handleCreateRequest);
    router.get('/', MovieHandler.handleListRequest);
    router.patch('/:movie_id', MovieHandler.handleUpdateRequest);
    return router;
}