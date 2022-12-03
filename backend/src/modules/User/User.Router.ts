import { Router } from "express";
import UserHandler from "./User.Handler";


export default (): Router => {
    const router = Router();

    router.post("/", UserHandler.handleCreateRequest)
    router.get("/", UserHandler.handleListRequest)
    router.get("/:user_id", UserHandler.handleUpdateRequest)
    router.patch("/:user_id", UserHandler.handleUpdateRequest)
    

    return router;
}