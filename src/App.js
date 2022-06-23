import React from 'react';
import './App.css';
import Board from './components/Board';

function App()
{
    return (
        <div className="App">
            <div className='board-wrapper animate'>
                <Board />
            </div>
            <div>
                <button>Solve</button>
                <button>Scramble</button>
            </div>
        </div >
    );
}

export default App;
