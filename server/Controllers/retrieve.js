import mongoose from "mongoose";
import dotenv from "dotenv";
import Grid from "gridfs-stream";
dotenv.config()

import PostModel from "../Models/postModel.js";

const conn = mongoose.createConnection(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//gfs stands for grid file system (a file system for mongoDB)
// normally created for files larger than 16MB (normally you'd use base64 to code the file, but is a much more simple way to do it)

let gfs;

conn.once("open", () => {
  console.log("DB Connected");

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

export const retrievePosts = (req, res) => {
  PostModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      data.sort((b, a) => {
        return a.timestamp - b.timestamp;
      });
      res.status(200).send(data);
    }
  });
};

export const retrieveSingleImage = (req, res) => {
  gfs.files.findOne({ filename: req.query.name }, (err, file) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!file || file.length === 0) {
        res.status(404).json({ err: "File Not Found." });
      } else {
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      }
    }
  });
};
