import mongoose from "mongoose";

import PostModel from "../Models/postModel.js";

export const uploadImage = (req, res) => {
  res.status(201).send(req.file);
};

export const uploadPost = (req, res) => {
  const dbPost = req.body;

  PostModel.create(dbPost, (err, data) => {
    if (err) {
      // status 500 means internal server error
      res.status(500).send(err);
    } else {
      //status 201 means successfully created
      res.status(201).send(data);
    }
  });
};
