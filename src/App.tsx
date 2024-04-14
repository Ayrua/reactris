import Board from "./component/Board"

const App = () => {
  const board = new Array(20).fill(0).map(() => new Array(10).fill(0));
  console.log(board)

  board[10][5] = 1
  board[11][5] = 1
  board[12][5] = 1
  board[11][4] = 1

  return (
    <div>
      <Board board={board} />
    </div>
  )
}

export default App