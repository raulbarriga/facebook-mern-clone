import React, { useState, useEffect } from "react";
import axios from "../axios";
import Pusher from "pusher-js";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";

import "./Feed.css";

// from the Pusher docs
const pusher = new Pusher("c63fdd573e57192a5bdf", {
  cluster: "us3",
});

const Feed = () => {
  const [profilePic, setProfilePic] = useState("");
  const [postsData, setPostsData] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPostsData(
  //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  //     )
  //   );
  // }, []);
  const syncFeed = () => {
    axios.get("/retrieve/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };

  // for pusher live sync for posts
  useEffect(() => {
    const channel = pusher.subscribe("posts");
    channel.bind("inserted", function (data) {
      syncFeed();
    });
  }, []);

  //whenever the application loads
  useEffect(() => {
    syncFeed();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
    </div>
  );
};

export default Feed;
