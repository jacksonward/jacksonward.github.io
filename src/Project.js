import React, { Component } from 'react'

export class Project extends Component {
  render() {
    return (
      <div className="column is-one-quarter box is-fullwidth-mobile has-background-light has-text-left" 
      style={{position: "relative", margin: "1em", paddingBottom: "3em", marginBottom: "0 !important"}}>
        <h2 className="has-text-primary">{this.props.name}</h2>
        <p className="has-text-dark">{this.props.description}</p>
        <a 
        href={this.props.link} 
        target="_blank" 
        className="has-text-info"
        style={{
          position: "absolute",
          bottom: "10px"
        }}
        >Github</a>
      </div>
    )
  }
}

export default Project