import React, { useContext, useEffect } from 'react'
import { TimerContext } from '../context/TimerContex';

export default function Timer()
{
    const value = useContext(TimerContext);
    const time = value.time;

    return (
        <div className="timer">
            <span className="digits seconds">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits miliseconds">
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )
}
