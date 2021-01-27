import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import multer from "multer";
// import GridFsStorage from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
// import path from "path";
import Pusher from "pusher";

//import mongoPosts from './Models/postModel.js'
import uploadRoutes from "./Routes/upload.js";
import retrieveRoutes from "./Routes/retrieve.js";

Grid.mongo = mongoose.mongo;

//app config
const app = express();
dotenv.config();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "us3",
  useTLS: true,
});

//middleware
app.use(bodyParser.json());
app.use(cors());

// db config
const mongoURI =
  "mongodb+srv://fbclient:gKNf7YbWRXvGAOzK@cluster0.hyoxn.mongodb.net/facebook-mern?retryWrites=true&w=majority";

// For Pusher
mongoose.connection.once("open", () => {
  const changeStream = mongoose.connection.collection("posts").watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      console.log("Triggering Pusher");

      // create a channel for pusher
      // inserted is the event, the object is the data that changed
      pusher.trigger("posts", "inserted", {
        change: change,
      });
    } else {
      // error handler
      console.log("Error triggering the Pusher");
    }
  });
});

// const conn = mongoose.createConnection(mongoURI, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//gfs stands for grid file system (a file system for mongoDB)
// normally created for files larger than 16MB (normally you'd use base64 to code the file, but is a much more simple way to do it)
// let gfs;

// conn.once("open", () => {
//   console.log("DB Connected");

//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("images"); // creating a collection to store all our images there
// });

// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       const filename = `image-${Date.now()}${path.extname(file.originalname)}`;

//       const fileInfo = {
//         filename: filename,
//         bucketName: "images", // same name here as the gfs.collection above
//       };

//       resolve(fileInfo);
//     });
//   },
// });

// const upload = multer({ storage });

// there's a difference between mongoose.createConnection & mongoose.connect
mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.use("/upload", uploadRoutes);
app.use("/retrieve", retrieveRoutes);

// app.post("/upload/image", upload.single("file"), (req, res) => {
//   res.status(201).send(req.file);
// });

// app.post('/upload/post', (req, res) => {
//     const dbPost = req.body

//     mongoPosts.create(dbPost, (err, data) => {
//         if(err) {
//             // status 500 means internal server error
//             res.status(500).send(err)
//         } else {
//             //status 201 means successfully created
//             res.status(201).send(data)
//         }
//     })
// })

//save the image >> save post w/ image name
// retrieve the post >> get the image of the post
// app.get('/retrieve/posts', (req, res) => {
//     mongoPosts.find((err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             data.sort((a, b) => {
//                 return a.timestamp - b.timestamp
//             })
//         }

//         res.status(200).send(data)
//     })
// })

// app.get('/retrieve/images/single', (req, res) => {
//     gfs.files.findOne({ filename: req.query.name }, (err, file) => {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             if (!file || file.length === 0) {
//                 res.status(404).json({ err: 'File Not Found.' })
//             } else {
//                 const readstream = gfs.createReadStream(file.filename)
//                 readstream.pipe(res)
//             }
//         }
//     })
// })

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
