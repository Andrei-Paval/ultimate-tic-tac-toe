import { useState } from "react";
import {
  computeGameState,
  computeMiniBoardState,
  computeAvailable,
} from "../algorithms";
import MiniBoard from "./MiniBoard.js";

export default function GameBoard() {
  const [player, setPlayer] = useState("X");
  const [gameState, setGameState] = useState(null);
  const [gameBoard, setGameBoard] = useState(
    Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => {
        return {
          state: "available",
          cells: Array.from({ length: 3 }, () =>
            Array.from({ length: 3 }, () => null)
          ),
        };
      })
    )
  );

  function handleMove(i, j) {
    return (k, l) => {
      generateNextGameBoard(i, j, k, l);
    };
  }

  function generateNextGameBoard(i, j, k, l) {
    const nextGameBoard = gameBoard.slice();
    nextGameBoard[i][j].cells[k][l] = player;

    let miniState = computeMiniBoardState(nextGameBoard[i][j].cells);
    if (miniState !== "Continue") {
      nextGameBoard[i][j].state = miniState;
      let gameState = computeGameState(nextGameBoard);
      if (gameState !== "Continue") {
        for (let t = 0; t < 3; ++t) {
          for (let s = 0; s < 3; ++s) {
            if (nextGameBoard[t][s].state !== "available") continue;
            nextGameBoard[t][s].state = "unavailable";
          }
        }
        setGameBoard(nextGameBoard);
        setGameState(gameState);
        return;
      }
    }
    computeAvailable(nextGameBoard, k, l);

    setGameBoard(nextGameBoard);
    setPlayer(player === "X" ? "O" : "X");
  }

  function reset() {
    setGameState(null);
    setPlayer("X");
    setGameBoard(
      Array.from({ length: 3 }, () =>
        Array.from({ length: 3 }, () => {
          return {
            state: "available",
            cells: Array.from({ length: 3 }, () =>
              Array.from({ length: 3 }, () => null)
            ),
          };
        })
      )
    );
  }

  return (
    <div className="absolute">
      <div className="border-4 rounded relative flex-column justify-center items-center">
        {(gameState === "X" || gameState === "O") && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[30em] text-cyan-500 z-30 translate-y-[0.01em]">
            {gameState}
          </div>
        )}
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center items-center">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <MiniBoard
                key={colIndex}
                miniBoard={gameBoard[rowIndex][colIndex]}
                handleMove={handleMove(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="relative w-full">
        <button
          onClick={reset}
          className="rounded bg-sky-500 text-blue-950 absolute top-2 right-0 text-sm w-[55px] hover:opacity-90 active:opacity-70"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
