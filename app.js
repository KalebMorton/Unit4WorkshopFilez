import express from "express";
const app = express();
export default app;

import files from "./api/files.js"
import folders from "./api/folders.js"

app.use(express.json());

app.route("/").get((req, res) => {
    res.send("Welcome to Filez")
})

app.use("/files", files)

app.use("/folders", folders)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send("code no work")
})