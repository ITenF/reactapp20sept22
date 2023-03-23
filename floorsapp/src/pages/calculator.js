import React, { useState } from 'react';

//styles
import '../styles/ticTacToe.css';


function Calculator(){


    const [uitkomst1 , setUitkomst ] = useState('');
    const randomGetal1 = Math.floor(Math.random() * 11);
    const randomGetal2 = Math.floor(Math.random() * 11);
    const uitkomstPlus = randomGetal1 + randomGetal2;



    const handleSubmit = (event) => {
        event.preventDefault();
        if (uitkomst1 == uitkomstPlus){
            alert("goed gedaan");
        }else{
            alert("fout antwoord");
        }
    }
///////////////////////////////////Tic Tac Toe

function Square({value , onSquareClick}){
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
        );
    }

function CalculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
    }

function Board( {xIsNext , squares, onPlay}){

//VARIABLES
    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

//Functions
function HandleClick(i) {
    if (CalculateWinner(squares) || squares[i]) {
        return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
        nextSquares[i] = 'X';
    } else {
        nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
    }

    //RETURN
    return (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => HandleClick(0)} />
        <Square value={squares[1]} onSquareClick={() =>HandleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => HandleClick(2)} />
        </div>
        <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => HandleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => HandleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => HandleClick(5)} />
        </div>
        <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => HandleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => HandleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => HandleClick(8)} />
        </div>
    </>
    );

}

function Game(){
    
    //VARIABLES
     const [xIsNext , setXIsNext] = useState(true);  
     const [history, setHistory] = useState([Array(9).fill(null)]);
     const [currentMove , setCurrentMove] = useState(0);

     const currentSquares = history[currentMove];

     const moves = history.map((squares , move) => {
        let description;
        if (move >0 ){
            description = "Ga naar zet #" + move;
        }else{
            description = "Ga naar start de wedstrijd";
        }
        return(
            <li key={move}>
                <button onClick={() => JumpTo(move)}>{description}</button>
            </li>
        );

     });
     
     //FUNCTIONS
        function handlePlay(nextSquares){
            const nextHistory = [...history.slice(0 , currentMove+1), nextSquares];
            setHistory(nextHistory);
            setCurrentMove(nextHistory.length - 1);
            setXIsNext(!xIsNext);
        }

        function JumpTo(nextMove){
            setCurrentMove(nextMove);
            setXIsNext(nextMove %2 === 0);
        }

     //RETURN

     return(
        <div className='game'>
        <div className='game-board'>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className='game-info'>
            <ol>{moves}</ol>
        </div>
    </div>
     );
}


return (
    <>
    <form onSubmit={handleSubmit}>
        <label>hoeveel is {randomGetal1} + {randomGetal2}=
        <input type="text" value={uitkomst1}  onChange={(e) => setUitkomst(e.target.value)} />
        </label>
        <input type = "submit" />
    </form>
    //ticTacToe
     <Game/>
    
    
    </>
    
)
}

export default Calculator;