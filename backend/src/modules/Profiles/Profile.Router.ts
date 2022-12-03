import { Router } from "express";
import ProfileHandler from "./Profile.Handler";



export default (): Router => {
    const router = Router();

    router.post("/", ProfileHandler.handleCreateRequest)
    router.get("/", ProfileHandler.handleListRequest)
    return router;
}