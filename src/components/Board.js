import React, { useState } from 'react'
import Number from './Number.js'

const INITIAL_BOARD = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];

export default function Board()
{
    const [board, setBoard] = useState(INITIAL_BOARD);

    var renderedOutput = board.map((row, y) => 
    {
        return row.map((item, x) => 
        {
            return <Number number={item} pos={[x, y]} />;
        });
    });

    return (
        renderedOutput
    )
}
