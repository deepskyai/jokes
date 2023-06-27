import React from 'react';
import JokeButton from './JokeButton';

class Joke extends React.Component {
  constructor () {
    super ()
    this.state = {
      jokeString: ''
    }
    this.getJoke = this.getJoke.bind(this);
  }

  async getJoke() {
    const url = 'https://api.chucknorris.io/jokes/random'
    const response = await fetch(url);
    const data = await response.json();
    const joke = data.value
    this.setState({ jokeString: joke })
  }

  render() {
    return (
      <div>
        <JokeButton getJoke={this.getJoke}/>
        <h3>{this.state.jokeString}</h3>
      </div>
    );
  }
}

export default Joke;