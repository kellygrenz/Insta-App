import React from 'react'



const Form = () => 

  <form>
    <label>Insert Post Title:</label>
    <input type='text' onChange={this.updateTitle} />

    <label>Insert Image Caption:</label>
    <input type='text' onChange={this.updateCaption} />
  </form>


export default Form
