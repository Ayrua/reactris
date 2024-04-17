import { checkLines, checkMove, randomPiece, setShapeOnBoard } from "./utils"


export const GameLoop = (piece: number[], board: number[][]) => {
    const [idx, x, y, r] = piece
    // check if piece at bottom else move down
    if (!checkMove(idx, x, y + 1, r, board)) {
        setShapeOnBoard(piece[0], piece[1], piece[2], piece[3], board)
        piece[0] = randomPiece()
        piece[1] = board[0].length / 2
        piece[2] = 0
        piece[3] = 0
    } else {
        piece[2]++
    }

    // check for line then move
    checkLines(board)
}