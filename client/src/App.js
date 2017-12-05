import React, {Component} from 'react'
import Header from './Header'
import PostList from './PostList'
import Form from './Form'
import $ from 'jquery'

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
      <div>
        <Header />
        <Form />
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

