import { Avatar } from "@mui/material";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    onSnapshot(query(collection(db, "posts"), orderBy('timestamp', 'desc')), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data()
        }
      }))
    })
  }, [posts]);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoURL: user.photoURL || '',
        timestamp: serverTimestamp(),
      });
      setInput("");
  };
  
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_inputTop">
          <Avatar
            className="feed_avatar"
            src={user.photoURL || ''}
          >{user.displayName[0]}</Avatar>
          <div className="feed_input">
            <CreateIcon />
            <form action="">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Talk to your network about your interests"
              />
              <button onClick={sendPost} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
          <InputOption Icon={YouTubeIcon} color="#7FC15E" title="Video" />
          <InputOption Icon={EventNoteIcon} color="#E7A33E" title="Event" />
          <InputOption
            Icon={CalendarViewDayIcon}
            color="#F5987E"
            title="Write Article"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
