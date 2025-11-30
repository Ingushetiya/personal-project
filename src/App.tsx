import React, { Suspense, useContext } from 'react';
import { Counter } from './components/Counter';
import { Link, Route, Routes } from 'react-router-dom';
import MainPageAsync from './pages/MainPage/MainPage.async';
import AbooutPageAsync from './pages/AboutPage/AboutPage.async';
import './styles/index.scss';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`app ${theme} `}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<MainPageAsync />} path={'/'} />
                    <Route element={<AbooutPageAsync />} path={'/about'} />
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};

export default App;
