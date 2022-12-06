import { Router } from "express";
import CategoryHandler from "./Category.handler";


export default (): Router => {
    const router = Router();

    router.post('/', CategoryHandler.handleCreateRequest);
    router.get('/', CategoryHandler.handleListRequest);
    return router;
}