import express from "express";
import homeController from "../controllers/homeController";
const router = express.Router();
/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
    router.get("/hello", homeController.handleHelloWorld);
    router.get("/user", homeController.handleUserPage);
    app.use("/api", router);
};
export default initWebRoutes;
