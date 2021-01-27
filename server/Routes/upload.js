import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import path from "path";

import { uploadImage, uploadPost } from "../Controllers/posts.js";

const router = express.Router();
dotenv.config();

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `image-${Date.now()}${path.extname(file.originalname)}`;

      const fileInfo = {
        filename: filename,
        bucketName: "images", // same name here as the gfs.collection above
      };

      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

router.post("/image", upload.single("file"), uploadImage);
router.post("/post", uploadPost);

export default router;
