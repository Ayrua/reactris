import { Shapes, shapeTypes } from "./Shapes"

// point index to roated index
export const rotate = (x: number, y: number, r: number) => {
    switch (r % 4) {
        case 0: return y * 4 + x
        case 1: return 12 + y - (x * 4)
        case 2: return 15 - (y * 4) - x
        case 3: return 3 - y + (x * 4)
        default: return 0
    }
}

// checks if that position is free
export const checkMove = (idx: number, x: number, y: number, r: number, board: number[][]) => {
    const boardWidth = board[0].length
    const boardHeight = board.length

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const idxShape = rotate(i, j, r)

            // check if index is shape
            if (shapeTypes.includes(Shapes[idx][idxShape])) {
                // 1. check if out ouf bounds for width
                if (x + i < 0 || x + i >= boardWidth) return false
                // 2. check if out of bounds for height
                if (y + j < 0 || y + j >= boardHeight) return false
                // 3. check if position is taken
                if (board[y + j][x + i] != 0) return false
            }
        }
    }

    return true
}

export const drawBoard = (idx: number, x: number, y: number, r: number, board: number[][]) => {
    // deep copy to not update reference
    let newBoard = [...board]
    for (let i = 0; i < newBoard.length; i++) {
        newBoard[i] = [...board[i]]
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const s = Shapes[idx][rotate(i, j, r)]
            if (shapeTypes.includes(s)) {
                newBoard[y + j][x + i] = s
            }
        }
    }
    return newBoard
}

export const setShapeOnBoard = (idx: number, x: number, y: number, r: number, board: number[][]) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const s = Shapes[idx][rotate(i, j, r)]
            if (shapeTypes.includes(s)) {
                board[y + j][x + i] = s
            }
        }
    }
}

export const randomPiece = () => {
    return Math.floor(Math.random() * 7)
}

export const move = (piece: number[], board: number[][], key: string) => {
    const [idx, x, y, r] = piece
    // check keypress
    if (key == 'a' && checkMove(idx, x - 1, y, r, board)) piece[1]--
    if (key == 'd' && checkMove(idx, x + 1, y, r, board)) piece[1]++
    if (key == 's' && checkMove(idx, x, y + 1, r, board)) piece[2] = y + 1
    if (key == 'r' && checkMove(idx, x, y, r + 1, board)) piece[3] = r + 1 % 4
}

export const checkLines = (board: number[][]) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 0) break
            if (i == board.length - 1 && j == board[0].length - 1 && shapeTypes.includes(board[i][j])) {
                replaceLine(board, i)
            }
        }
    }
}

export const replaceLine = (board: number[][], line: number) => {
    console.log('asdasfasfasfasfasfaf')
    for (let i = line; i > 0; i--) {
        console.log('asdasfasf')
        board[i] = board[i - 1]
    }
}