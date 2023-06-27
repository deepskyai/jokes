import React from "react";

const JokeButton = ({getJoke}) => {
  return (
    <div>
      <button type='button' onClick={getJoke}>
        Click for a new Joke
      </button>
    </div>
  );
}

export default JokeButton;