import Square from "./Comp/square.jsx";
import React, { useState } from "react";

export default function TicTacToe() {
    const [turn, setTurn] = useState("X");
    const [squares, setSquares] = useState({
        a: null, b: null, c: null,
        d: null, e: null, f: null,
        g: null, h: null, i: null
    });
    const [winner, setWinner] = useState(null);

    function calculateWinner(sq) {
        const lines = [
            ["a", "b", "c"],
            ["d", "e", "f"],
            ["g", "h", "i"],
            ["a", "d", "g"],
            ["b", "e", "h"],
            ["c", "f", "i"],
            ["a", "e", "i"],
            ["c", "e", "g"],
        ];

        for (let [x, y, z] of lines) {
            if (sq[x] && sq[x] === sq[y] && sq[x] === sq[z]) {
                return sq[x];
            }
        }
        return null;
    }

    function handleClick(key) {
        if (squares[key] || winner) return;

        const nextSquares = { ...squares, [key]: turn };
        setSquares(nextSquares);

        const win = calculateWinner(nextSquares);
        if (win) {
            setWinner(win);
        } else {
            setTurn(turn === "X" ? "O" : "X");
        }
    }

    function Reset() {
        setSquares({a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null, i: null});
        setWinner(null);
        setTurn("X");
    }

    return (
        <>
            <div className="game">
                <h1>Tic Tac Toe</h1>
                <div className="grid">
                    <Square onSquareClick={() => handleClick('a')} value={squares.a}/>
                    <Square onSquareClick={() => handleClick('b')} value={squares.b}/>
                    <Square onSquareClick={() => handleClick('c')} value={squares.c}/>
                    <Square onSquareClick={() => handleClick('d')} value={squares.d}/>
                    <Square onSquareClick={() => handleClick('e')} value={squares.e}/>
                    <Square onSquareClick={() => handleClick('f')} value={squares.f}/>
                    <Square onSquareClick={() => handleClick('g')} value={squares.g}/>
                    <Square onSquareClick={() => handleClick('h')} value={squares.h}/>
                    <Square onSquareClick={() => handleClick('i')} value={squares.i}/>
                </div>

                <div className="status">
                    {winner ? `Winner: ${winner}` : `Turn: ${turn}`}
                </div>

                <button className="reset" onClick={Reset}>
                    Reset Game
                </button>
            </div>
            </>
    );
}
