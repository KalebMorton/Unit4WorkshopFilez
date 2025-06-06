import express from "express";
const router = express.Router();
export default router;

import { getFolders, getSingleFolder } from "#db/queries/folderQueries";
import { createFile } from "#db/queries/fileQueries";

router.route("/")
.get(async (req, res) => {
    res.status(200).send(await getFolders())
})

router.route("/:id")
.get(async (req, res) => {
    const singleFolder = await getSingleFolder(Number(req.params.id))
    if (singleFolder){
        res.status(200).send(singleFolder)
    }else(
        res.status(404).send("folder not found")
    )
})

router.route("/:id/files")
.post(async (req, res) => {
    if (!await getSingleFolder(Number(req.params.id))) return res.status(404).send("folder not found")
    if (!req.body) return res.status(400).send("request body is required")
    if (!req.body.file_name || !Number(req.body.size)) return res.status(400).send("request body is missing fields")

    createFile(req.body.file_name, Number(req.body.size), Number(req.params.id))
    res.status(201).send(`created file`)
})