import React, { Component } from 'react'
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';

export default class SVG extends Component {
  render() {
    return (
      <div className="column">
        <img style={{
            // Who doesn't like magic numbers?
            height: 73.5,
            width: 73.5,
        }} src={this.props.svg} />
        <p>{this.props.name}</p>
      </div>
    )
  }
}
