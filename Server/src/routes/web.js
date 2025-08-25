import express from "express";
import userController from "../controllers/userController";
const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {

    // USER
    router.get("/users/get-all-users", userController.getAllUsers);
    router.post("/users/create-user", userController.handleCreateNewUser)
    app.use("/api", router);
};
export default initWebRoutes;
