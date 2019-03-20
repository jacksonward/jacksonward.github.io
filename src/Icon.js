import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Icon extends Component {
  render() {
    return (
      <div className="column">
        <span className="has-text-primary">
          <FontAwesomeIcon icon={this.props.icon} size="5x"/>
        </span>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Icon
