import { Router } from "express";
import UserHandler from "./User.Handler";


export default (): Router => {
    const router = Router();

    router.post("/", UserHandler.handleCreateRequest)

    return router;
}