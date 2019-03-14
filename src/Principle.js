import React, { Component } from 'react'

export class Principle extends Component {
  render() {
    return (
      <div 
      className="column box is-fullwidth-mobile has-background-light has-text-centered" 
      style={{margin: "1em"}}>
        <h2 className="has-text-primary">{this.props.name}</h2>
        <p className="has-text-dark">{this.props.description}</p>
      </div>
    )
  }
}

export default Principle
