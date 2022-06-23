import React, { useState } from 'react'
import Number from './Number.js'

const INITIAL_BOARD = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];

export default function Board()
{
    const [board, setBoard] = useState(INITIAL_BOARD);

    function getCell(row, col)
    {
        return document.getElementById(row + '-' + col);
    }

    function swapCells(from, to)
    {
        const tmp = [from.className, from.innerText];

        from.className = to.className;
        from.innerText = to.innerText;

        to.className = tmp[0];
        to.innerText = tmp[1];
    }

    function handleOnClick(element)
    {
        console.log(element.target)
        console.log(element.target.innerText)
        if (!element.target.innerText)
        {
            console.log("You've clicked the empty square")
            return
        }

        console.log("Which values can move")
        const id = element.target.id.split('-');

        // Gets cell position indexes
        const row = parseInt(id[0]);
        const col = parseInt(id[1]);

        // Tries to get empty adjacent cell
        var adjacent = [];
        if (row < 3) { adjacent.push(getCell(row + 1, col)); }
        if (row > 0) { adjacent.push(getCell(row - 1, col)); }
        if (col < 3) { adjacent.push(getCell(row, col + 1)); }
        if (col > 0) { adjacent.push(getCell(row, col - 1)); }

        //console.log(adjacent)

        for (const cell of adjacent)
        {
            if (cell.className === 'blank')
                swapCells(element.target, cell)
        }

    }


    var renderedOutput = board.map((row, y) => 
    {
        return row.map((item, x) => 
        {
            return <Number
                number={item}
                pos={[x, y]}
                handleOnClick={handleOnClick} />;
        });
    });

    return (
        renderedOutput
    )
}
