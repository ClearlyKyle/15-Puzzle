import React from 'react';
import './App.css';
import Board from './components/Board';
import ThemeToggle from './components/ThemeToggle';
import Timer from './components/Timer';
import { TimerProvider } from './context/TimerContex';


function App()
{
    return (
        <>
            <div className="App">
                <TimerProvider>
                    <Timer />
                    <div className='board-wrapper animate'>
                        <Board />
                    </div>
                </TimerProvider>
                <div className="controls">
                    <button >Solve</button>
                    <button >Scramble</button>
                </div>
            </div >
            <div className='footer'>
                hello
                <ThemeToggle />
            </div>
        </>
    );
}

export default App;
