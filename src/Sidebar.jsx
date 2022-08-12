import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const sidebar_recentItem = (topic) => {
        return (
            <div className="sidebar_recentItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        );
    }
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://media-exp1.licdn.com/dms/image/C4D16AQE5fHEegxhNLQ/profile-displaybackgroundimage-shrink_350_1400/0/1655732535576?e=1665619200&v=beta&t=pdYT3sOsD-QAi9mvVMzvNoMxnDo0WTcxhMmAR7O8WGs" alt="" />
            <Avatar className='sidebar_avatar' src={user.photoURL}>
            {user.displayName[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Connections</p>
                <p className="sidebar_statNumber">25</p>
            </div>
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">18</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {sidebar_recentItem("ReactJS")}
            {sidebar_recentItem("Redux")}
            {sidebar_recentItem("Firebase")}
            {sidebar_recentItem("Authentication")}
            {sidebar_recentItem("NextJS")}
        </div>
    </div>
  )
}

export default Sidebar