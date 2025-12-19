import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/Providers/ThemeProvider';
import 'shared/config/i18next/i18next';
import App from 'app/App';
import { ErrorBoundary } from 'app/Providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
