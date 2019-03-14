import React, { Component } from 'react'

export class Icon extends Component {
  render() {
    return (
      <div className="column">
        <span className="has-text-primary">
          <i className={this.props.Classes}></i>
        </span>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Icon
