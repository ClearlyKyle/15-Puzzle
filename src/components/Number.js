import React from 'react'

export default function Number({ number, pos, handleOnClick })
{
    return (
        <span
            className={number === '' ? 'blank' : 'number'}
            id={`${pos[0]}-${pos[1]}`}
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
