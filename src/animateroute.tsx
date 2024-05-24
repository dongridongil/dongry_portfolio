import About from './Components/Main/Main';
import Skills from './Components/Main/Skills';
import Projects from './Components/Main/Projects';
import Footer from './Components/Footer/Footer';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
    const location = useLocation();
    /* 컨텍스트 규칙에 따라서 location 훅 사용하는 컴포넌트와 app 컴포넌트 분리 */
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<About />} />
                <Route path="/Projects" element={<Projects projectsData={[]} />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/footer" element={<Footer />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
