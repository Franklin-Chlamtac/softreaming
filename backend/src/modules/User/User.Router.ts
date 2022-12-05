import { Router } from "express";
import UserHandler from "./User.handler";
import UserValidator from "./User.validator";
import Authentication from "../../services/Authentication";


export default (): Router => {
    const router = Router();

    router.post('/',  UserValidator.validateCreateUserPayload, UserHandler.handleCreateRequest);
    router.post('/authenticate', Authentication.authenticate )

    return router;
}