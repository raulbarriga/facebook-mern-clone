import React from "react";

import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
//import { useState } from "../stateProvider";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
      <SidebarRow
        src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p148x148/116051609_3993339194069581_1755650167168111583_o.jpg?_nc_cat=110&ccb=2&_nc_sid=dbb9e7&_nc_ohc=67IUIsdXJnIAX8T96jH&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=b255f3b0d66985fe8aa8b3c6b84fa05e&oe=602C068E"
        title="Frankie"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />

      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
};

export default Sidebar;
