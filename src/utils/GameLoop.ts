import { checkLines, checkMove, gameOverCheck, setShapeOnBoard, spawnPiece } from "./utils"


export const GameLoop = (piece: number[], board: number[][], points: number): [boolean, number] => {
    const [idx, x, y, r] = piece
    const gameOver = gameOverCheck(board)
    // check if piece at bottom else move down
    if (!checkMove(idx, x, y + 1, r, board)) {
        setShapeOnBoard(piece[0], piece[1], piece[2], piece[3], board)
        spawnPiece(piece, board)
    } else {
        piece[2]++
    }

    // check for line then move
    const p = checkLines(board) + points
    return [gameOver, p]
}