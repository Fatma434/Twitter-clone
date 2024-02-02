import React from 'react';
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    timestamp,
    te
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
          <Avatar alt="Remy Sharp" src="https://i.cbc.ca/1.7046282.1701447456!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/humane-society.jpg" />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <h3>
                  Suga-bts {""}
                  <span className='post__headerSpecial'
                  ><CheckCircleIcon className="post__badge"  /> @fgf</span>
                </h3>
            </div>
            <div className='post__headerDescription'>
              <p> hiiiiiiiiiiii , everybody </p>
            </div>
        
        <img  
        src="https://img.wattpad.com/156181e751adcfdd476ba2bd113e390be52a66e2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f2d7762747a5343736771374a513d3d2d323835382e313562333739663431363835353961313339363036313733303832392e676966" alt=""/>
  
  <div className='post__footer'>
  <ChatBubbleOutlineIcon  fontSize="small"  />
  <RepeatIcon fontSize="small"  />
  <FavoriteBorderIcon fontSize="small"  />
  <PublishIcon fontSize="small" />
  </div>
  </div>
    </div>
  );
}

export default Post;
