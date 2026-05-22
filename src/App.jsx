import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils/calculateWinner";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const updatedSquares = [...squares];
    updatedSquares[index] = isXTurn ? "X" : "O";

    setSquares(updatedSquares);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Tic Tac Toe</h1>

      <div className="mb-4 text-xl font-semibold">
        {winner
          ? `Winner: ${winner}`
          : isDraw
            ? "It's a Draw!"
            : `Current Turn: ${isXTurn ? "X" : "O"}`}
      </div>

      <Board squares={squares} onClick={handleClick} />

      <button
        onClick={resetGame}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;
