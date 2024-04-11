import { motion, useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = styled(motion.nav)`
    position: fixed;
    height: 80px;
    top: 0;
    width: 100%;
    z-index: 1000;

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: center;
    }
`;

const Tab = styled.div`
    color: whitesmoke;
    font-size: 20px;
    margin: 0 10px;
    left: -510px;
    position: relative;
    padding: 30px;
    cursor: pointer;
    &:hover {
        font-weight: 1000;
        color: #e31b6d;
    }
`;

const navVar = {
    top: {
        backgroundColor: '#358aa4',
        transition: { duration: 0.5 },
    },

    scroll: {
        backgroundColor: 'rgba(0,0,0,0)',
        transition: { duration: 0.5 },
    },
};
const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const controls = useAnimation();
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > prevScrollPos) {
            controls.start('scroll');
        } else {
            controls.start('top');
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <Nav variants={navVar} initial="top" animate={controls}>
            <ul>
                <Tab>
                    <a href="#home">HOME</a>
                </Tab>
                <Tab>
                    <a href="#about">ABOUT</a>
                </Tab>

                <Tab>
                    <a href="#project">PROJECT</a>
                </Tab>
                <Tab>
                    <a href="#skill">SKILL</a>
                </Tab>
            </ul>
        </Nav>
    );
};

export default Header;
