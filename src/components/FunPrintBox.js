import React from "react";

const FunPrintBox = ({funSearchLength}) => {
  let word = 'BumBum '
  let funString = word.repeat(funSearchLength).trim()
  return (
    <div>
      <p>{funString}</p>
    </div>
  );
}

export default FunPrintBox;
