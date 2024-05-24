import { BrowserRouter as HashRouter } from 'react-router-dom';
import AnimatedRoutes from './animateroute';

function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <AnimatedRoutes />
        </HashRouter>
    );
}

export default App;
