import express from "express";

import { retrievePosts, retrieveSingleImage } from "../Controllers/retrieve.js";
const router = express.Router();

router.get("/posts", retrievePosts);
router.get("/image/single", retrieveSingleImage);

export default router;
