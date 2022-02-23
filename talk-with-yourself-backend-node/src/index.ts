import "dotenv-safe/config";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { catchErrors, notFound } from "../src/middlewares/errors";
import expressSession from "express-session";
import { sessionConfig } from "./config/session";
import users from "./routes/userRoutes";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession(sessionConfig));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/users", users);

app.use(notFound);
app.use(catchErrors);

app.listen(process.env.PORT);
