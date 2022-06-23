import React, { createContext, useState, useEffect } from 'react'

// Create context
export const TimerContext = createContext();

// Provider component
export function TimerProvider({ children })
{
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);

    //Actions
    React.useEffect(() =>
    {
        let interval = null;

        if (isActive === true)
        {
            interval = setInterval(() =>
            {
                setTime((time) => time + 10);
            }, 10);
        } else
        {
            clearInterval(interval);
        }
        return () =>
        {
            clearInterval(interval);
        };
    }, [isActive]);

    const handleStart = () =>
    {
        setIsActive(true);
        setTime(0);
    };

    const handleStop = () =>
    {
        setIsActive(false);
    }

    return (
        <TimerContext.Provider value={{ time, handleStart, handleStop }}>
            {children}
        </TimerContext.Provider>
    );
} 