import React from 'react'
// import PropType from 'prop-type'

const style = {
  postWrapper: {
    background: '#2C3E50',
    padding: '100px'
  },
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#FDE3A7',
    padding: '15px'

  },
  caption: {
    fontFamily: 'Permanent Marker, cursive'
  }
}

const Post = ({item, index, deletePost}) => {
  console.log(item)
  return (
    <div style={style.postWrapper}>
      <div style={style.postContainer} key ={index}>
        <h2>{item.title}</h2>
        <img src={item.img} />
        <h4 style={style.caption}>{item.caption}</h4>
        <p>Posted By: {item.userName}</p>
        <button type='button' onClick={deletePost}>Delete Post</button>
      </div>
    </div>
  )
} 

export default Post
