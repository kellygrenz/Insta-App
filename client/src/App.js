import React, {Component} from 'react'
import $ from 'jquery'
import PostList from './PostList'


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

  render () {
    return (
      <div>
        <h1>🍕 Hello Worlds 🍕</h1>
        {
          this.state.posts
          ? <PostList
          posts={this.state.posts} />
          : 'No Posts'
        }
        
      </div>
    )
  }
}
  




export default App

