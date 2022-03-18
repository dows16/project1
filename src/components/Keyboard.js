import React, { useCallback, useEffect, useContext } from 'react';
//To detect any key event from the keyboard we need to import the "useEffect" hook.
import {AppContext} from '../App';
import Key from './Key';

function Keyboard() {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
  //I used the most common keyboard format, the "QWERTY" keyboard
  //I didn't create a function for each individual key since it'll be so much harder to work with and I used less code and spent less time creating the function since I used arrays instead.
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  //This is the array for the first line of keys on a keyboard
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  //This is the array for the second line of keys on a keyboard
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  //This is the array for the third line of keys on a keyboard
  const handleKeyboard = useCallback((event) => {
    //The event arguement towards the "useCallBack" function will tell us which key on our keyboard we actually typed.
    if (event.key === "Enter"){
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
      })
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
      //Instead of needing to listen for each and every letter typed, we can just go through the list of keys by looping through them using ".forEach" and grab the individual key.
    }
  })
  //The "useCallBack" hook is really useful for maintaining performance inside of your react projects, and it prevent the need of reupdating our components and our functions unnecessarily 

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    //We need to access the actual document object, we have to do this because we need to add an event listener for detecing when a keydown event happens.
    return () => {
    document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
  <div className="keyboard" onKeyDown={handleKeyboard}>
    <div className="line1">
      {keys1.map((key) => {
      //The function ".map()" creates a new array by calling a provided function on every element in the calling array, also used to manipulate or change data items iteratively.
      return <Key keyVal={key}/>;
      //The Key component with take the value or the key through the "props" function.
      })}
    </div>
    <div className="line2">
      {keys2.map((key) => {
      return <Key keyVal={key}/>;
      })}
    </div>
    <div className="line3">
      <Key keyVal={"ENTER"} bigKey />
      {/*The key value "ENTER" is set individually and not along with the rest since it'll cause more problems later on if it was all the same value, The "ENTER" and "DELETE" keys are also larger than the other keysw from the keyboard on wordle so I made a seperate prop for them.*/}
      {keys3.map((key) => {
      return <Key keyVal={key}/>;
      })}
      <Key keyVal={"DELETE"} bigKey />
    </div>
  </div>
  );
}

export default Keyboard;