import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from 'react';

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post_header">
            <Avatar src={photoURL}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="whitesmoke"/>
            <InputOption Icon={CommentIcon} title="Comment" color="whitesmoke"/>
            <InputOption Icon={ShareIcon} title="Share" color="whitesmoke"/>
            <InputOption Icon={SendIcon} title="Send" color="whitesmoke"/>
        </div>
    </div>
  );
})

export default Post;