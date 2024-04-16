import Board from "./component/Board"
import { drawBoard, setShapeOnBoard } from "./utils/utils";

const App = () => {
  const board = new Array(20).fill(0).map(() => new Array(10).fill(0));

  const newBoard = drawBoard(1, board[0].length / 2, 0, 0, board)

  // check reference and drawing is not the same 
  console.log(board[0][7] != newBoard[0][7]) // should be true
  setShapeOnBoard(1, board[0].length / 2, 0, 0, board)
  const newBoard2 = drawBoard(1, board[0].length / 2, 0, 0, board)
  console.log(board[0][7] != newBoard2[0][7]) // should be false

  return (
    <div>
      <Board board={newBoard} />
    </div>
  )
}

export default App