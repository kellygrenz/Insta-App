import React, {Component} from 'react'
import Header from './Header'
import PostList from './PostList'
// import Form from './Form'
import $ from 'jquery'

const style = {
  wrapper: {
    displaly: 'flex',
    width: '70%',
    border: '5px solid red',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    padding: '30px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  }
}

class App extends Component {
  state = {
    posts: undefined,
    title: undefined, 
    caption: undefined
  }

  componentDidMount() {
    this.loadPostsFromServer()
  }


  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({ posts: response.posts})
    })
  }

 


  submitPostToServer = () => {
    const newPost = {
      title: this.state.title,
      caption: this.state.caption
    }

    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done((response) => {
      console.log(response)
      this.loadPostsFromServer()
    })
  }

  updateTitle = (e) => this.setState({ title: e.target.value})
  updateCaption = (e) => this.setState({ caption: e.target.value})



  render () {
    return (
      <div style={style.wrapper}>
        <Header />
        <form style={style.form}>
          <label>Insert Post Title:</label>
          <input type='text' onChange={this.updateTitle} />

          <label>Insert Image Caption:</label>
          <input type='text' onChange={this.updateCaption} />
          <button onClick={this.submitPostToServer}>Submit Post</button>
        </form>
        {
          this.state.posts
          ? <PostList posts={this.state.posts}/>
          : 'No Posts'
        }
        
        
      </div>
    )
  }
}
  




export default App

