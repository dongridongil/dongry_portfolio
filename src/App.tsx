import { BrowserRouter as HashRouter } from 'react-router-dom';
import AnimatedRoutes from './animateroute';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom } from './atom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Lighttheme, darktheme } from './theme';
import Toggle from './toggle';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');
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
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  cursor: none;

 
}

*, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
 
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
   
}
body {
  line-height: 1;

}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


body {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-style: normal;
  min-height: ${(props) => props.theme.minHeight};
  background-image: ${(props) => props.theme.backgroundImage};
  background-size: ${(props) => props.theme.backgroundSize};
  background-color: ${(props) => props.theme.background};
  color:${(props) => props.theme.textColor};
 
  width:100%;
  overflow-x: hidden;
    margin: 0;
    padding: 0;
    cursor: none;
}

a {
  text-decoration:none;
  color:inherit;
  cursor: none;
}
.nav-link {
  color: #201e1edc; 

}
`;

function App() {
    const isDark = useRecoilValue(isDarkAtom);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDark = () => setDarkAtom((prev) => !prev);
    return (
        <ThemeProvider theme={isDark ? darktheme : Lighttheme}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <button onClick={toggleDark}>
                    <Toggle />
                </button>
                <GlobalStyle />
                <AnimatedRoutes />
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
