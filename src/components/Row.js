import Cell from "./Cell.js";

const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

export default function Row({ rowCells, onCellClick }) {
  return (
    <div style={style}>
      <Cell value={rowCells[0]} onCellClick={onCellClick(0)} />
      <Cell value={rowCells[1]} onCellClick={onCellClick(1)} />
      <Cell value={rowCells[2]} onCellClick={onCellClick(2)} />
    </div>
  );
}
