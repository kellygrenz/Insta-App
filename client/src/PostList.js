import React from 'react'

const style = {
  postContainer: {
    display: 'flex',
    background: '#FABE58',
    alignItems: 'center',
    flexDirection: 'column'

  }
}

const PostList = ({ posts }) => {
  return (
    <div style={style.postContainer}>
      {
        posts.map((item, index) => {
          return <div key={index}> 
                    <h1>{item.title}</h1> 
                    <h3>{item.caption}</h3> 
                  </div>
            
        })
      }
    </div>
  )
}

export default PostList
