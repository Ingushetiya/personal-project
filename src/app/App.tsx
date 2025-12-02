import { Link } from 'react-router-dom';
import { useTheme } from 'app/Providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from './Providers/router/ui/AppRouter';
import { Navbar } from 'widjets/Navbar';

import './styles/index.scss';
import { MainPage } from 'pages/MainPage';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>toggle</button>
            <AppRouter />
        </div>
    );
};

export default App;
