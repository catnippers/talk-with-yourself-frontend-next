import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("is okay :D");
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on PORT ${process.env.PORT}`)
);
