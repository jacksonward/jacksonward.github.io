import React, { Component } from 'react'

export default class SVG extends Component {
  render() {
    return (
      <div className="column">
        <img style={{
          fill: 'hsl(171, 100%, 41%)',
            // Who doesn't like magic numbers?
            height: 73.5,
            width: 73.5,
        }} src={this.props.svg} />
        <p className="has-text-light">{this.props.name}</p>
      </div>
    )
  }
}
