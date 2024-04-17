import { useEffect, useRef, useState } from "react";
import Board from "./component/Board"
import { drawBoard, move } from "./utils/utils";
import { GameLoop } from "./utils/GameLoop";

const App = () => {
  const board = new Array(20).fill(0).map(() => new Array(10).fill(0));
  const [newBoard, setNewBoard] = useState(drawBoard(1, board[0].length / 2, 0, 0, board))
  const piece = useRef([1, board[0].length / 2, 0, 0])

  useEffect(() => {
    document.addEventListener('keydown', keyChange, true)
  }, [])

  const keyChange = (e: any) => {
    move(piece.current, board, e.key)
    // setNewBoard(drawBoard(piece.current[0], piece.current[1], piece.current[2], piece.current[3], board))
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      GameLoop(piece.current, board)
      setNewBoard(drawBoard(piece.current[0], piece.current[1], piece.current[2], piece.current[3], board))
    }, 150);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <Board board={newBoard} />
    </div>
  )
}

export default App