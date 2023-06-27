import React from "react";

const FunSearch = ({onFunSearchChange}) => {
  return (
    <div>
      <input
        type='search'
        placeholder='type something fun'
        onChange={onFunSearchChange}
      />
    </div>
  )
}

export default FunSearch;
