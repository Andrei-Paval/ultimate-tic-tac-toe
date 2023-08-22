import gameBoardValue from "./gameBoardValue";
import miniBoardValue from "./miniBoardValue";

function computeAvailable(gameBoard, k, l) {
  if (
    gameBoard[k][l].state === "X" ||
    gameBoard[k][l].state === "O" ||
    gameBoard[k][l].state === "Draw"
  ) {
    for (let t = 0; t < 3; ++t) {
      for (let s = 0; s < 3; ++s) {
        if (gameBoard[t][s].state !== "unavailable") continue;
        gameBoard[t][s].state = "available";
      }
    }
  } else {
    for (let t = 0; t < 3; ++t) {
      for (let s = 0; s < 3; ++s) {
        if (gameBoard[t][s].state !== "available") continue;
        gameBoard[t][s].state = "unavailable";
      }
      gameBoard[k][l].state = "available";
    }
  }
}

function computeMiniBoardState(cells) {
  let value = miniBoardValue(cells);
  if (value === 100) return "X";
  if (value === -100) return "O";
  if (value === "Draw") return "Draw";
  return "Continue";
}

function computeGameState(gameBoard) {
  let value = gameBoardValue(gameBoard);
  if (value === 1000) return "X";
  if (value === -1000) return "O";
  if (value === "Draw") return "Draw";
  return "Continue";
}

export { computeGameState, computeMiniBoardState, computeAvailable };
