import React from 'react'

const style = {
  postContainer: {
    display: 'flex',
    background: '#FABE58',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '30px'
  },
  singlePost: {
    border: '1px dotted #EC644B',
    background: '#fff',
    display: 'flex',
    padding: '10px',
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '25px'
  },
  img: {
   maxWidth: '90%'
  }
}

const PostList = ({ posts }) => {
  return (
    <div style={style.postContainer}>
      {
        posts.map((item, index) => {
          return <div key={index} style={style.singlePost}> 
                    <h1>{item.title}</h1> 
                    <img src={item.img} style={style.img}/>
                    <h3>{item.caption}</h3> 
                  </div>
            
        })
      }
    </div>
  )
}

export default PostList
