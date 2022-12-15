import { Router } from "express";
import ProfilesHandler from "./Profiles.handler";
import ProfilesValidator from "./Profiles.validator";



export default (): Router => {
    const router = Router();

    router.post('/:userId', ProfilesValidator.validateCreateProfilePayload,ProfilesHandler.handleCreateRequest);

    return router;
}