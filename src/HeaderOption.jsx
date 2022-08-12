import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { selectUser } from './features/userSlice';
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      { avatar &&
        <Avatar className="headerOption_icon" src={user?.photoURL}>{user?.displayName[0]}</Avatar>
      }
      
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
