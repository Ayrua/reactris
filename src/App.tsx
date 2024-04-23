import { useEffect, useRef, useState } from "react";
import Board from "./component/Board"
import { drawBoard, move } from "./utils/utils";
import { GameLoop } from "./utils/GameLoop";

const App = () => {
  const board = new Array(20).fill(0).map(() => new Array(10).fill(0));
  const piece = useRef([1, board[0].length / 2, -3, 0])
  const [idx, x, y, r] = piece.current
  const [newBoard, setNewBoard] = useState(drawBoard(idx, x, y, r, board))
  const points = useRef(0)
  const gameOver = useRef(false)
  const level = (Math.floor(points.current / 300)) + 3
  const fps = 1000 / level

  useEffect(() => {
    document.addEventListener('keydown', keyChange, true)
    setInterval(() => {
      const [idx, x, y, r] = piece.current
      setNewBoard(drawBoard(idx, x, y, r, board))
    }, 1);
  }, [])

  const keyChange = (e: any) => {
    move(piece.current, board, e.key)
  }

  useEffect(() => {

    const intervalID = setInterval(() => {
      if (!gameOver.current) {
        const [g, p] = GameLoop(piece.current, board, points.current)
        gameOver.current = g
        points.current = p
      }
    }, fps);


    return () => clearInterval(intervalID);
  }, [gameOver.current]);

  return (
    <div>
      <Board board={newBoard} />
      <div className="infotext">points: {points.current} | level:{level - 2} </div>
      <div className="infotext">controls: wasd | arrowkeys | r</div>
      <div className="infotext">{gameOver.current ? 'game over' : ''}</div>
    </div>
  )
}

export default App