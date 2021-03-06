import React, {Component} from 'react'
import Header from './Header'
import PostList from './PostList'
// import Form from './Form'
import $ from 'jquery'

const style = {
  bg: {
    background: '#a2ded0',
    padding: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    displaly: 'flex',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white'
  },
  form: {
    display: 'flex',
    padding: '30px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginTop: '20px',
    marginBottom: '10px',
    fontFamily: 'Abel, sans-serif',
    fontSize: '25px'

  },
  field: {
    padding: '15px',
    borderRadius: '5px',
    borderStyle: 'solid',
    width: '60%'
  },
  button: {
    marginTop: '15px',
    width: '300px',
    padding: '15px',
    background: '#EC644B',
    borderStyle: 'none',
    color: '#fff',
    fontFamily: 'Pacifico, cursive',
    fontSize: '25px'
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
      <div style={style.bg}>
        <div style={style.wrapper}>
          <Header />
          <form style={style.form}>
            <label style={style.label}>Insert Post Title:</label>
            <input type='text' onChange={this.updateTitle} placeholder='insert post title here' style={style.field}/>

            <label style={style.label}>Insert Image Caption:</label>
            <input type='text' onChange={this.updateCaption} placeholder='insert post caption here' style={style.field}/>
            <button onClick={this.submitPostToServer} style={style.button}>Submit Post</button>
          </form>
          {
            this.state.posts
            ? <PostList posts={this.state.posts}/>
            : 'No Posts'
          }
          
          
        </div>
      </div>
    )
  }
}
  




export default App

