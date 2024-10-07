import { BrowserRouter as HashRouter } from 'react-router-dom';
import About from './Components/Main/About';
import Skills from './Components/Main/Skills';
import Projects from './Components/Main/Projects';
import Footer from './Components/Footer/Footer';
import { createGlobalStyle } from 'styled-components';
import Header from './Components/Header/Header';
import Works from './Components/Main/Works';
import { useEffect, useRef, useState } from 'react';
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Jalnan';
    font-weight: normal;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/goodchoice/Jalnan.ttf') format("truetype");
    font-display: swap;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: 'Jalnan';
}

`;

function App() {
    const projectsRef = useRef(null);

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <GlobalStyle />
            <Header />
            <About projectsRef={projectsRef} />
            <div ref={projectsRef}>
                <Projects />
            </div>
            <Works />
            <Skills />
            <Footer />
        </HashRouter>
    );
}

export default App;
