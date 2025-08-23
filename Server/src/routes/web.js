import express from 'express';
const router = express.Router();
/**
 * 
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
    router.get("/hello", (req, res) => {
        res.send("Hello World");
    });
    app.use('/', router);
}
export default initWebRoutes;