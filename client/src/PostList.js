import React from 'react'

const PostList = ({posts}) => { 
  return (
    <div>
      {
        posts.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
              <img src={item.img} />
            </div>
          )
        })
      }

    </div>
  )
}

export default PostList
