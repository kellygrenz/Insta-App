import React from 'react'

const PostList = ({ posts }) => {
  return (
    <div>
      {
        posts.map((item, index) => {
          return <p key={index}> {item.title} {item.caption} </p>
            
        })
      }
    </div>
  )
}

export default PostList
