import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal, bigKey, disabled }) {
  const { onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
      {/*The id in the div box will be dependent on whether the key should be big or not.*/}
      {/*I added an "onClick" method so when you click the letters it will be able to print it out on the grid/board because I made a function called "selectLetter".*/}
      {keyVal}
    </div>
  );
}

export default Key;