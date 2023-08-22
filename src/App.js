import GameBoard from "./components/GameBoard.js";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="dark:bg-slate-800"
    >
      <GameBoard />
    </div>
  );
}

export default App;
