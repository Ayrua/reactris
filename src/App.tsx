import { useEffect, useRef, useState } from "react";
import Board from "./component/Board"
import { drawBoard, move } from "./utils/utils";
import { GameLoop } from "./utils/GameLoop";

const App = () => {
  const board = new Array(20).fill(0).map(() => new Array(10).fill(0));
  const [newBoard, setNewBoard] = useState(drawBoard(1, board[0].length / 2, 0, 0, board))
  const piece = useRef([1, board[0].length / 2, -2, 0])
  const gameOver = useRef(false)
  const fps = 1000 / 15

  useEffect(() => {
    document.addEventListener('keydown', keyChange, true)
  }, [])

  const keyChange = (e: any) => {
    move(piece.current, board, e.key)
  }

  useEffect(() => {

    const intervalID = setInterval(() => {
      if (!gameOver.current) {
        gameOver.current = GameLoop(piece.current, board)
        setNewBoard(drawBoard(piece.current[0], piece.current[1], piece.current[2], piece.current[3], board))
      }
    }, fps);


    return () => clearInterval(intervalID);
  }, [gameOver.current]);

  return (
    <div>
      <Board board={newBoard} />
    </div>
  )
}

export default App