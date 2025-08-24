import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8081;
dotenv.config();
configViewEngine(app);
initWebRoutes(app);
app.listen(PORT, () => {
    console.log(">>> JWT Server is running on the port " + PORT);
});
