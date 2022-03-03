import "dotenv-safe/config";
import express from "express";
import bodyParser from "body-parser";
import { catchErrors, notFound } from "./middlewares/errors";
import expressSession from "express-session";
import usersRoute from "./packages/routes/userRoutes";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  expressSession({
    name: "sessionId",
    secret: process.env.SECRET_SESSION as string,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
      secure: false,
      sameSite: "lax",
      httpOnly: true,
    },
    resave: true,
    saveUninitialized: false,
  })
);

app.use("/api/users", usersRoute);

app.use(notFound);
app.use(catchErrors);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server listening on port: ${port}`));
