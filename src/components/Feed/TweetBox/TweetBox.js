import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import { useState } from 'react'

import db from '../../../firebase'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");



  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Salma EL BARMAKI",
      username: "barmaki_salma",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i.ibb.co/7S0Vqgz/Female-Developer.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };



  return (
    <div className="tweetBox">
      <form action="">

        <div className="tweetBox__input" >
          <Avatar src="/971.jpg" />
          <input 
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          type="text" placeholder="What's happening" />
        </div>

        <input 
        value={tweetImage} onChange={e => setTweetImage(e.target.value)} 
        className="tweetBox__imageInput" type="text" placeholder="Optional: Enter image URL" />

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton" >Tweet</Button>

      </form>
    </div>
  )
}

export default TweetBox
