import './App.css'
import TicTacToe from "./tictactoe.jsx";
import {useState} from "react";
import Square from "./Comp/square.jsx";

function App() {
    const size = 3;
    const boxes = size * size;
    const [squares, setSquares] = useState(Array(boxes).fill(null));
  return (
    <>
      <TicTacToe squares={squares} setSquares={setSquares} size={size} boxes={boxes}/>
    </>
  )
}

export default App
