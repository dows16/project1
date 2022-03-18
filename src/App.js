import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './components/Words';
import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  //we need to access the "board" and "setBoard" statements 
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})
  //we call "currAttempt" that will represent what you're currently attempting, "useState" function is keeping track of two pieces of information, the attempts and which attempt you're attempting.
  //I set the "attempt" to 0 because you start off with 0 attempts as well as the "letterPos" is zero too. 
  
  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    //The "selectLetter" function will write all the logic for selecting and adding the letters to the grid.
    const newBoard = [...board];
    //For the logic we check to see which letter the user selected so we get the current instance of the board. 
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    //I set "newBoard" to the row of "curAttempt" for it's row value and then "newBoard"'s letter position value to "currAttempt.letterPos".
    setBoard(newBoard);
    //After we change the board we need to set the current attempt to be whatever it was before. 
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
    //This line of code makes it so that at "setCurrAttempt" it will start and whatever "currAttempt" was at, so 0, like "letterPos", but when you continue to click a letter it'll advance on the grid and the "currAttempt" and "letterPos" values will both go up by one.
    onSelectLetter(keyVal);
  }

  const onDelete = () => {
    //The else if statement represents the key value "DELETE"
    if(currAttempt.letterPos === 0) return;
    //The if statement above makes it so you can't delete anything if the "letterPos" value is zero, since you're not supposed to be able to delete any letter if you haven't entered any letter.
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos -1] = "";
    //I set it so that "currAttempt.letterPos" to -1 because we're deleting the letter so it goes back to the value from before, then it'll also display an empty string since you deleted the letter.
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
    onDelete();
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
    onEnter();
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter }}>
        <div className="game">
          <Board />
          {/*The Board's component^^*/}
          <Keyboard />
          {/*The Keyboard's component^^*/}
        </div>
      </AppContext.Provider>
    </div>
  )};

export default App;
