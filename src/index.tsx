import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'app/App';
import './app/styles/index.css';

const root = document.getElementById('root');

if (!root) {
    throw new Error(
        'Unable to run React application. The root element is not found.',
    );
}

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
