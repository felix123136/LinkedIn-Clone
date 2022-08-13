import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "./features/userSlice";
import { Avatar } from "@mui/material";


function Header() {
  const [openProfile, setOpenProfile] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };
  return (
    <div className="header">
      <div className="header_left">
        <LinkedInIcon sx={{ fontSize: 40 }} className="linkedin_icon" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          onClick={() => setOpenProfile(!openProfile)}
          title="Me"
        />
      </div>
      {
        openProfile && (
          <div className="profile">
            <div className="profile_header">
              <Avatar className="profile_headerAvatar" src={user.photoURL}>{user.displayName[0]}</Avatar>
              <div className="profile_info">
                  <h2>{user.displayName}</h2>
                  <p>{user.email}</p>
              </div>
            </div>
            <button>View Profile</button>
            <div className="accounts">
              <h2>Accounts</h2>
              <p>Settings & Privacy</p>
              <p>Help</p>
              <p>Language</p>
            </div>
            <div className="manage">
              <h2>Manage</h2>
              <p>Post & Activity</p>
              <p>Job Posting Account</p>
            </div>
            <span onClick={logoutOfApp}>Sign Out</span>
          </div>
        )
      }
    </div>
  );
}

export default Header;
