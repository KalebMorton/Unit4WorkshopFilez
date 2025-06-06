import express from "express";
const router = express.Router();
export default router;

import { getFiles } from "#db/queries/fileQueries";

router.route("/")
.get(async (req, res) => {
    res.status(200).send(await getFiles())
})