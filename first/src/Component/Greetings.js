import React, { Component } from 'react'
export default class Greetings extends Component {
  render() {
    return (
      <div>
        <h1> Hi {this.props.username} and my message is {this.props.message} </h1>
      </div>
    )
  }
}
