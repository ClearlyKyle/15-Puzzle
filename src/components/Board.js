import React, { useState, useContext, useEffect } from 'react'
import { TimerContext } from '../context/TimerContex.js';
import Number from './Number.js'

const INITIAL_BOARD = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, '']];

export default function Board()
{
    const contextValues = useContext(TimerContext);

    const [board, setBoard] = useState(INITIAL_BOARD);
    const [firstClick, setFirstClick] = useState(true);

    function getCell(row, col)
    {
        return document.getElementById(row + '-' + col);
    }

    function checkIfSolved()
    {
        const current_number_order = document.getElementsByClassName('board-wrapper')[0].innerText.split('\n').map(item => parseInt(item, 10));

        console.log(current_number_order)
        console.log([...Array(15).keys()].map(x => ++x))

        if (JSON.stringify(current_number_order) === JSON.stringify([...Array(15).keys()].map(x => ++x)))
            alert("SOLVED!!");
    }

    function swapCells(from, to)
    {
        // from - the square we click
        // to - the empty cell
        const tmp_css = to.style.cssText;
        const tmp_id = to.id;

        // Exchanges id and style values
        to.id = from.id;
        from.id = tmp_id;

        to.style.cssText = from.style.cssText;
        from.style.cssText = tmp_css;
    }

    function getAdjacentCells(elementId)
    {
        const id = elementId.split('-');

        // Gets cell position indexes
        const row = parseInt(id[0]);
        const col = parseInt(id[1]);

        // Tries to get empty adjacent cell
        var adjacent = [];
        if (row < 3) { adjacent.push(getCell(row + 1, col)); }
        if (row > 0) { adjacent.push(getCell(row - 1, col)); }
        if (col < 3) { adjacent.push(getCell(row, col + 1)); }
        if (col > 0) { adjacent.push(getCell(row, col - 1)); }

        return adjacent;
    }

    function handleOnClick(element)
    {
        if (firstClick === true)
        {
            setFirstClick(false);
            console.log("first click is made.. starting timer")
            contextValues.handleStart();
        }

        console.log(element.target)
        console.log(element.target.innerText)
        if (!element.target.innerText)
        {
            console.log("You've clicked the empty square")
            return
        }

        const adjacent = getAdjacentCells(element.target.id);

        console.log("adjacent moves: ", { adjacent })

        for (const cell of adjacent)
        {
            if (cell.innerText === '')
                swapCells(element.target, cell)
        }

        checkIfSolved();
    }

    function RandomInt(from, to)
    {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }

    function shuffle()
    {
        console.log("Beginning to shuffle...");

        const blankCell = document.getElementsByClassName('blank')[0];

        // Randomly select a cell
        let previousCell;

        for (let i = 0; i < 100; i++)
        {
            const adjacent = getAdjacentCells(blankCell.id);

            if (adjacent.includes(previousCell))
                adjacent.slice(previousCell, 1);

            previousCell = adjacent[RandomInt(0, adjacent.length - 1)];

            swapCells(previousCell, blankCell);
        }
        console.log("Shuffle complete!");
    }

    useEffect(() =>
    {
        shuffle();
    }, []);

    var renderedOutput = board.map((row, y) => 
    {
        return row.map((item, x) => 
        {
            return <Number
                number={item}
                pos={[y, x]}
                handleOnClick={handleOnClick} />;
        });
    });

    return (
        renderedOutput
    )
}
