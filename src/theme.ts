import { DefaultTheme } from 'styled-components';
export const darktheme: DefaultTheme = {
    textColor: 'white',
    minHeight: '100vh',
    background: '#262626',
    backgroundImage: `
        linear-gradient(to right, #333 1px, transparent 1px),
        linear-gradient(to bottom, #333 1px, transparent 1px)
    `,
    backgroundSize: '5vh 5vh',
};

export const Lighttheme: DefaultTheme = {
    textColor: 'black',
    minHeight: '100vh',
    background: '#f5f5f5',
    backgroundImage: `
        linear-gradient(to right, #ccc 1px, transparent 1px),
        linear-gradient(to bottom, #ccc 1px, transparent 1px)
    `,
    backgroundSize: '5vh 5vh',
};
