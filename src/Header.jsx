import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { logout } from "./features/userSlice";


function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };
  return (

    <div className="header">
      <div className="header_left">
        {/* <img
          src="https://images-ext-1.discordapp.net/external/VpHgTGYZWuVMTVdawsC4QI20eRA1bTj97zOIpiUxJhg/%3Ftoken%3Dexp%3D1660131615~hmac%3Dd2c374c54f7fc13d9554bfb02b27aa8f/https/cdn-icons.flaticon.com/png/512/3536/premium/3536505.png"
          alt=""
        /> for light mode*/}
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
          title="Me"
        />
        <HeaderOption onClick={logoutOfApp} Icon={LogoutIcon} title="Log out" />
      </div>
    </div>
  );
}

export default Header;
