import React from 'react'

class Blog extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pageTitle :"This is my blog page "
    }
  }

  render(){
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>  
      </div>
    )
  }
}

export default Blog;