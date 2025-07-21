import React, { Component } from 'react'
import Greetings from './Component/Greetings';
import Hobbies from './Component/Hobbies';
import Introduction from './Component/Introduction';
import Qualification from './Component/Qualification';
import Skills from './Component/Skills';
import Personal from './Component/Personal';
import Greetingpropsfunction from './Component/Greetingpropsfunction';
export default class App extends Component {
  render() {
    const name = "Aksh";
    const message = "Welcome to my React App";
    return (
      <div>
        <h1>Welcome to My App</h1>
        <Greetings username = {name} message = {message} />
        <Hobbies />
        <Introduction />
        <Qualification />
        <Skills />
        <Personal /> 
        <Greetingpropsfunction name={name} message={message} />
      </div>
    )
  }
}

