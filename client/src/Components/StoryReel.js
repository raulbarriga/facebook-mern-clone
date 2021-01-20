import React from "react";

import Story from "./Story";
import './StoryReel.css'

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/* story >> img, profilepic */}
      <Story
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png"
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        title="Sonny Sangna"
      />
      <Story
        image="https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg"
        profileSrc="https://uifaces.co/our-content/donated/bUkmHPKs.jpg"
        title="Rafeh Qazi"
      />
      <Story
        image="https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723"
        profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
        title="Nazariy Dumanskyy"
      />
      {/* <Story
        image="https://www.facebook.com/raul.barriga.79/"
        profileSrc="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p148x148/116051609_3993339194069581_1755650167168111583_o.jpg?_nc_cat=110&ccb=2&_nc_sid=dbb9e7&_nc_ohc=67IUIsdXJnIAX8T96jH&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=b255f3b0d66985fe8aa8b3c6b84fa05e&oe=602C068E"
        title="Raul Barriga"
      /> */}
    </div>
  );
};

export default StoryReel;
