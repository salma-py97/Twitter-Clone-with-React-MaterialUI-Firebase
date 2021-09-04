import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'
import { useState, useEffect } from 'react'

import FlipMove from 'react-flip-move'

import db from '../../../firebase'

const Feed = () => {
  // state
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({id:doc.id, data: doc.data()})))
    ))
  }, [])

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />
    
      {/* Post */}

      <FlipMove>
        {posts.map(post => (
          // for the key we need to use the document id from firebase and use it as a key
          <Post key={post.id} displayName={post.data.displayName} username={post.data.username} verified={post.data.verified} 
          text={post.data.text}
          avatar={post.data.avatar} image={post.data.image} />
          ))}
      </FlipMove>


    </div>
  )
}

export default Feed
