import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Principle extends Component {
  render() {
    return (
      <div 
      className="on-top staggering-box column box is-fullwidth-mobile has-background-dark has-text-centered" 
      style={{margin: "1em"}}>
        <span className="has-text-primary">
          <FontAwesomeIcon icon={this.props.icon} size="2x"/>
        </span>
        <h2 className="has-text-primary">{this.props.name}</h2>
        <p className="has-text-light">{this.props.description}</p>
      </div>
    )
  }
}

export default Principle
