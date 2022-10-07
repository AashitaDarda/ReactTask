import React, { useState } from "react";
// import { set } from "react-hook-form";
import Board from './Board';

const TicTacToe = () => {
    const [reset, setReset] = useState(false);
    const [winner, setWinner] = useState('');

    const resetBoard = () =>{
        setReset(true);
    }
    return(
        <>
            <div className="TicTacToe">
                <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                    <div className="winner-text">
                        {winner}
                    </div>
                    <button onClick={() => resetBoard()}>
                        Reset Board
                    </button>
                </div>
                <Board reset = {reset} setReset = {setReset} 
                    winner = {winner} setWinner = {setWinner}
                />
                
            </div>
        </>
    )
   
}
 export default TicTacToe