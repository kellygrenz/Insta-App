import React from 'react'

const style = {
  container: {
    background: '#013243',
    display: 'flex',
    padding: 20,
    justifyContent: 'center'
  },
  h3: {
    color: '#fff',
    fontFamily: 'Pacifico, cursive',
    fontSize: '35px'
  }
}

const Header = () => 
  <div  style={style.container}>
    <h3 style={style.h3}>Gram-Gram!</h3>
  </div>

  export default Header
  