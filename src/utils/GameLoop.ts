import { checkLines, checkMove, setShapeOnBoard, spawnPiece } from "./utils"


export const GameLoop = (piece: number[], board: number[][]) => {
    const [idx, x, y, r] = piece
    let gameOver = false
    // check if piece at bottom else move down
    if (!checkMove(idx, x, y + 1, r, board)) {
        setShapeOnBoard(piece[0], piece[1], piece[2], piece[3], board)
        gameOver = spawnPiece(piece, board)
    } else {
        piece[2]++
    }

    // check for line then move
    checkLines(board)
    return gameOver
}