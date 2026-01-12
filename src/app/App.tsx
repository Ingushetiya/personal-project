import React from 'react';
import { useTheme } from 'app/Providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from './Providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';

import { Suspense } from 'react';
import { Sidebar } from 'widgets/SideBar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
