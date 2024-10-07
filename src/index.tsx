import { RecoilRoot } from 'recoil';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css"
    integrity="sha384-BY+fdrpOd3gfeRvTSMT+VUZmA728cfF9Z2G42xpaRkUGu2i3DyzpTURDo5A6CaLK"
    crossOrigin="anonymous"
></link>;

const rootElement = document.getElementById('root');

// createRoot로 root 생성 후 렌더링
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </React.StrictMode>
    );
}
