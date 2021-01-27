import mongoose from "mongoose";

const postModel = mongoose.Schema({
  user: String,
  imgName: String,
  text: String,
  avatar: String,
  timestamp: String,
});

export default mongoose.model("posts", postModel);
//MongoDB always makes plural the connection names (the 1st argument 'posts' above)
//the best thing is to just name it plural by default in the model schema here