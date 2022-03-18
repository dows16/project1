import React from 'react'
import Letter from './Letter';

function Board() {
    return (
    <div className="board">
        <div className="row">
            <Letter letterPos={0} attemptVal={0} />
            <Letter letterPos={1} attemptVal={0} />
            <Letter letterPos={2} attemptVal={0} />
            <Letter letterPos={3} attemptVal={0} />
            <Letter letterPos={4} attemptVal={0} />
            {/*All "attemptVal"'s are zero since the first row is the first attempt, but the letters are changing because there are multiple letters on each word your guessing*/}
        </div>
        <div className="row"> 
            <Letter letterPos={0} attemptVal={1} />
            <Letter letterPos={1} attemptVal={1} />
            <Letter letterPos={2} attemptVal={1} />
            <Letter letterPos={3} attemptVal={1} />
            <Letter letterPos={4} attemptVal={1} />
            {/*The "attemptVal" is increasing by 1 every row since with every time there's a new row it's a new attempt on guessing the word.*/}
        </div>
        <div className="row"> 
            <Letter letterPos={0} attemptVal={2} />
            <Letter letterPos={1} attemptVal={2} />
            <Letter letterPos={2} attemptVal={2} />
            <Letter letterPos={3} attemptVal={2} />
            <Letter letterPos={4} attemptVal={2} />
        </div>
        <div className="row"> 
            <Letter letterPos={0} attemptVal={3} />
            <Letter letterPos={1} attemptVal={3} />
            <Letter letterPos={2} attemptVal={3} />
            <Letter letterPos={3} attemptVal={3} />
            <Letter letterPos={4} attemptVal={3} />
        </div>
        <div className="row"> 
            <Letter letterPos={0} attemptVal={4} />
            <Letter letterPos={1} attemptVal={4} />
            <Letter letterPos={2} attemptVal={4} />
            <Letter letterPos={3} attemptVal={4} />
            <Letter letterPos={4} attemptVal={4} />
        </div>
        <div className="row"> 
            <Letter letterPos={0} attemptVal={5} />
            <Letter letterPos={1} attemptVal={5} />
            <Letter letterPos={2} attemptVal={5} />
            <Letter letterPos={3} attemptVal={5} />
            <Letter letterPos={4} attemptVal={5} />
        </div>
    </div>
    );
}

export default Board;
//The grid is basically just going to be an array full of arrays, "the matrix".