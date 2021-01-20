import React from "react";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
      profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4" 
      message='Yo this is a message'
      timestamp='time'
      imgName='imgName'
      username='Frankie'
      />
    </div>
  );
};

export default Feed;
