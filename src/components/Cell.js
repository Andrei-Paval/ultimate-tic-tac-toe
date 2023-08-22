export default function Cell({ value, onCellClick, disabled }) {
  return (
    <button
      className="dark:bg-cyan-900 dark:text-orange-400 h-12 w-12 text-4xl rounded-none border enabled: opacity-100 disabled:opacity-60 z-20 disabled:z-0"
      onClick={onCellClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
