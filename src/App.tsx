import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';

function App() {
    const [navigateScreen, setNavigateScreen] = useState(1);
    return (
        <div>
            {navigateScreen === 1 && (
                <div>
                    <Screen1 />
                    <button onClick={() => setNavigateScreen(2)}>
                        Go to Screen 2
                    </button>
                </div>
            )}
            {navigateScreen === 2 && (
                <div>
                    <Screen2 />
                    <button onClick={() => setNavigateScreen(1)}>
                        Go to Screen 1
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
