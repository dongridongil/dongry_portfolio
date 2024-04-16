import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom'; //

import Home from './Routes/Home';
import About from './Components/Main/About';
import Skills from './Components/Main/Skills';
import Projects from './Components/Main/Projects';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
function App() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <>
                            <Home />
                            <Header />
                            <About />
                            <Projects projectsData={[]} />
                            <Skills />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </HashRouter>
    );
}

export default App;
