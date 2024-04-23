
interface Props {
    board: number[][]
}

interface CellProp {
    type: number
}

const Cell = ({ type }: CellProp) => {
    return (
        <div className={`t_${type}`}></div>
    )
}

const Board = ({ board }: Props) => {
    // console.log(board)

    return (
        <div className="board">
            {board.slice(4).map((row, rowId) => (
                <div className={'row'} key={rowId}>
                    {
                        row.map((cell, cellId) => (
                            <Cell type={cell} key={`${rowId},${cellId}`} />
                        ))
                    }
                </div>
            ))}
        </div>
    )
}

export default Board