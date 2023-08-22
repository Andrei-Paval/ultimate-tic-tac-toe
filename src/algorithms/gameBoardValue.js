import miniBoardValue from "./miniBoardValue";

export default function gameBoardValue(gameBoard) {
  let miniBoardValues = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (gameBoard[i][j].state === "X") {
        miniBoardValues[i][j] = 100;
      } else if (gameBoard[i][j].state === "O") {
        miniBoardValues[i][j] = -100;
      } else if (gameBoard[i][j].state === "Draw") {
        miniBoardValues[i][j] = 0;
      } else {
        miniBoardValues[i][j] = miniBoardValue(gameBoard[i][j].cells);
      }
    }
  }

  let gameBoardValue = 0;

  // Main Diagonal
  let value = 0;
  let X = 0;
  let O = 0;
  for (let i = 0; i < 3; ++i) {
    if (gameBoard[i][i].state === "X") {
      X++;
    } else if (gameBoard[i][i].state === "O") {
      O++;
    } else if (gameBoard[i][i].state === "Draw") {
      value = 0;
      break;
    }
    value += miniBoardValues[i][i];
  }
  if (X === 3) return 1000;
  if (O === 3) return -1000;
  if (X === 0 || O === 0) gameBoardValue += value;

  // Secondary Diagonal
  value = 0;
  X = 0;
  O = 0;
  for (let i = 0; i < 3; ++i) {
    if (gameBoard[i][2 - i].state === "X") {
      X++;
    } else if (gameBoard[i][2 - i].state === "O") {
      O++;
    } else if (gameBoard[i][2 - i].state === "Draw") {
      value = 0;
      break;
    }
    value += miniBoardValues[i][2 - i];
  }
  if (X === 3) return 1000;
  if (O === 3) return -1000;
  if (X === 0 || O === 0) gameBoardValue += value;

  for (let i = 0; i < 3; ++i) {
    // Row
    value = 0;
    X = 0;
    O = 0;
    for (let j = 0; j < 3; ++j) {
      if (gameBoard[i][j].state === "X") {
        X++;
      } else if (gameBoard[i][j].state === "O") {
        O++;
      } else if (gameBoard[i][j].state === "Draw") {
        value = 0;
        break;
      }
      value += miniBoardValues[i][j];
    }
    if (X === 3) return 1000;
    if (O === 3) return -1000;
    if (X === 0 || O === 0) gameBoardValue += value;

    // Column
    value = 0;
    X = 0;
    O = 0;
    for (let j = 0; j < 3; ++j) {
      if (gameBoard[j][i].state === "X") {
        X++;
      } else if (gameBoard[j][i].state === "O") {
        O++;
      } else if (gameBoard[j][i].state === "Draw") {
        value = 0;
        break;
      }
      value += miniBoardValues[j][i];
    }
    if (X === 3) return 1000;
    if (O === 3) return -1000;
    if (X === 0 || O === 0) gameBoardValue += value;
  }

  if (gameBoardValue === 0) {
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        if (
          gameBoard[i][j].state !== "X" &&
          gameBoard[i][j].state !== "O" &&
          gameBoard[i][j].state !== "Draw"
        ) {
          return 0;
        }
      }
    }
    return "Draw";
  }

  return gameBoardValue;
}
