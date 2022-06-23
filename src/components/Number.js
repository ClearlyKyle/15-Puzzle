import React from 'react'

export default function Number({ name, number, pos })
{
    function handleOnClick(event)
    {
        // Enables sliding animation
        puzzle.className = 'animate';
        shiftCell(e.target);
    }

    return (
        <span
            className={`number ${number}`}
            onClick={handleOnClick}
            style={{
                left: (pos[1] * 80 + 1 * pos[1] + 1) + 'px',
                top: (pos[0] * 80 + 1 * pos[0] + 1) + 'px',
            }}
        >
            {number}
        </span >
    )
}
