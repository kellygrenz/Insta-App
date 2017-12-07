import React from 'react'
import Post from './Post'

const PostList = ({posts, deletePost}) => { 
  return (
    <div>
      {
        posts.map((item, index) => {
          return (
            <Post 
              item={item}
              deletePost={() => deletePost(item) }
            />
          )
        })
      }

    </div>
  )
}

export default PostList
