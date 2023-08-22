import Cell from "./Cell.js";

export default function MiniBoard({ miniBoard, handleMove }) {
  function handleCellClick(i, j) {
    if (miniBoard.cells[i][j] !== null || miniBoard.state !== "available")
      return;
    handleMove(i, j);
  }

  return (
    <div className="relative flex-column justify-center items-center border">
      {(miniBoard.state === "X" || miniBoard.state === "O") && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[10em] text-orange-500 opacity-80 translate-y-[0.01em] z-10">
          {miniBoard.state}
        </div>
      )}
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex justify-center items-center">
          {Array.from({ length: 3 }).map((_, colIndex) => (
            <Cell
              key={colIndex}
              value={miniBoard.cells[rowIndex][colIndex]}
              onCellClick={() => handleCellClick(rowIndex, colIndex)}
              disabled={!(miniBoard.state === "available")}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
