export default function miniBoardValue(cells) {
  let value = 0;

  let X = 0;
  let O = 0;
  for (let i = 0; i < 3; ++i) {
    if (cells[i][i] === "X") {
      X++;
    } else if (cells[i][i] === "O") {
      O++;
    }
  }
  if (X === 3) return 100;
  if (O === 3) return -100;
  if (X === 0 || O === 0) value += X - O;

  X = 0;
  O = 0;
  for (let i = 0; i < 3; ++i) {
    if (cells[i][2 - i] === "X") {
      X++;
    } else if (cells[i][2 - i] === "O") {
      O++;
    }
  }
  if (X === 3) return 100;
  if (O === 3) return -100;
  if (X === 0 || O === 0) value += X - O;

  for (let i = 0; i < 3; ++i) {
    X = 0;
    O = 0;
    for (let j = 0; j < 3; ++j) {
      if (cells[i][j] === "X") {
        X++;
      } else if (cells[i][j] === "O") {
        O++;
      }
    }
    if (X === 3) return 100;
    if (O === 3) return -100;
    if (X === 0 || O === 0) value += X - O;

    X = 0;
    O = 0;
    for (let j = 0; j < 3; ++j) {
      if (cells[j][i] === "X") {
        X++;
      } else if (cells[j][i] === "O") {
        O++;
      }
    }
    if (X === 3) return 100;
    if (O === 3) return -100;
    if (X === 0 || O === 0) value += X - O;
  }

  if (value === 0) {
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        if (cells[i][j] === null) return 0;
      }
    }
    return "Draw";
  }

  return value;
}
