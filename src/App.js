import React from 'react';
import './App.css';
import Board from './components/Board';
import Timer from './components/Timer';
import { TimerProvider } from './context/TimerContex';


function App()
{
    return (
        <div className="App">
            <TimerProvider>
                <Timer />
                <div className='board-wrapper animate'>
                    <Board />
                </div>
            </TimerProvider>
            <div>
                <button >Solve</button>
                <button >Scramble</button>
            </div>
        </div >
    );
}

export default App;
