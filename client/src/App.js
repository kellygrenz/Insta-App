import React, {Component} from 'react'
import $ from 'jquery'
import PostList from './PostList'

const style = {
  wrapper: {
    background: '#FFCCBC',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }, 
  form: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '30px'
  },
  label: {
    color: '#2C3E50',
    fontSize: '25px',
    marginBottom: '10px'
  },
  field: {
    display: 'flex',
    width: '50%',
    padding: '10px',
    marginBottom: '25px'
  },
  submit: {
    padding: '15px',
    background: '#674172',
    color: '#fff',
    fontFamily: 'Permanent Marker, cursive',
    fontSize: '25px'
  }
}

class App extends Component {

  state = {
    posts: undefined, 
    title: undefined, 
    img: undefined, 
    userName: undefined
  }

  componentDidMount() {
    this.loadPostsFromServer()
  }

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
      this.setState({ posts: response.posts})
    })
  }

  submitNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      title: this.state.title,
      caption: this.state.caption,
      img: this.state.img,
      userName: this.state.userName
    }

    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done(response => {
      console.log(response)
      this.loadPostsFromServer()
    })
  }

  deletePost = (post) => {
    $.ajax({
      url: `/api/posts/${post._id}`,
      method: 'DELETE'
    }).done(response => {
      console.log(response)
      this.loadPostsFromServer()
    })
  }

  onTitleChange = (e) => this.setState({ title: e.target.value })
  onCaptionChange = (e) => this.setState({ caption: e.target.value })
  onImageChange = (e) => this.setState({ img: e.target.value })
  onUserNameChange = (e) => this.setState({ userName: e.target.value })

  render () {
    return (
      <div style={style.wrapper}>
        <h1 style={style.header}>Insta - Page 101 </h1>
        
        <form style={style.form}>
          <label style={style.label}>Post Title:</label>
          <input type='text' onChange={this.onTitleChange} style={style.field}/>

          <label style={style.label}>Image:</label>
          <input type='text' onChange={this.onImageChange} style={style.field}/>

          <label style={style.label}>Caption:</label>
          <input type='text' onChange={this.onCaptionChange} style={style.field}/>

          <label style={style.label}>User Name:</label>
          <input type='text' onChange={this.onUserNameChange} style={style.field}/>

          <button type='button' onClick={this.submitNewPost} style={style.submit}> Submit Post </button>
        </form>

        {
          this.state.posts
          ? <PostList
          posts={this.state.posts} 
          deletePost={this.deletePost}/>
          : 'No Posts'
        }
        
      </div>
    )
  }
}
  




export default App

