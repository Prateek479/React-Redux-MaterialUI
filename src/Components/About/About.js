import React from 'react'

class About extends React.Component {
  constructor(props) {
    super()
    this.state = {
      pageTitle :"This is my about page "
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

export default About;