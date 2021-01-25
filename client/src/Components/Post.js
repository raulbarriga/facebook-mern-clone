import React, { useState } from "react";

import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import "./Post.css";

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
  // console.log(timestamp)
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>

        <div className="post__bottom">
            <p>{message}</p>
        </div>
            {/* image will be here */}
            {
              imgName ? (
                <div className="post__image">
                  {/* use http://localhost:9000/ for development for backend fetch here */}
                  {/* use deploy path from heroku for production deployment */}
                  <img src={`http://localhost:9000/retrieve/image/single?name=${imgName}`} alt={`${imgName}`} />
                </div>
              ) : (
                console.log('DEBUG >>> no image here')
              )
            }

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
      
    </div>
  );
};

export default Post;
