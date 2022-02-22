import "dotenv-safe/config";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import users from "./routes/userRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", users);

app.listen(process.env.PORT);
