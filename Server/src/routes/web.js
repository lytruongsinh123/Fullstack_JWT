import express from "express";
import userController from "../controllers/userController";
const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {

    // USER
    router.get("/hello", userController.handleHelloWorld);
    router.get("/users", userController.handleUserPage);
    router.post("/users/create-user", userController.handleCreateNewUser)
    app.use("/api", router);
};
export default initWebRoutes;
