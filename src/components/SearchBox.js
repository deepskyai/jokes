import React from "react";

// creating a searchbox component that re-siplays the search field on the screen and updates each time you input a letter

const SearchBox = ({handleInputChange}) => {
  {/*The handleInputChange property (parameter) passed into this component (function) is a method defined in the App class. It defines what to do when the searchField changes during typing  */}
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="type something"
        onChange={handleInputChange}
      />
    </div>
  )
}
        {/*We then use the handleInputChange method passed down from the App class with the onChange prop (attribute). This triggers the handleInputChange method when the input field is changed  */}
export default SearchBox;