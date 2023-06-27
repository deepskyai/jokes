// Making a joke component to insert into the App app

import React, { Component } from 'react';

class Joke2 extends Component {
  render () {
    return (
      <div className='ba b--dashed link dim db m5 pa2 br2 ba b--black-10 shadow-10'>
        <h1>Hello World</h1>
        <p>Welcome to react</p>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Joke2;