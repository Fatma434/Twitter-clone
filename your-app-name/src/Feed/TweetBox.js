import React from 'react';
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className='tweetBox'>
<form>
    <div className='tweet__input'>
    <Avatar alt="Remy Sharp" src="https://i.cbc.ca/1.7046282.1701447456!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/humane-society.jpg" />
    <input  placeholder="What's is happing " type ="text" />
    </div>
    <input className='tweet__imageInput'
      placeholder=" Optional:Enter Image  URL" type ="text" />
    <Button className='tweet__tweetButton'>Tweet</Button>
</form>



    </div>
  )
}

export default TweetBox