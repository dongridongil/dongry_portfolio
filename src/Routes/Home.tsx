import styled, { keyframes } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Svg = styled.svg`
    width: 300px;
    height: 300px;
    path {
        stroke: #ffffff;
        stroke-width: 4;
    }
`;

const svg = {
    start: { y: 500, pathLength: 0.2, fill: 'rgba(255,255,255,1)' },
    end: { y: 0, pathLength: 1, fill: '#16eec7' },
};

const neonAnimation = keyframes`
     0% {
        text-shadow: 0 0 2px #ffffff, 0 0 4px #ffffff, 0 0 6px #f125e7, 0 0 7px #f125e7, 0 0 14px #f125e7, 0 0 14px #000000;
    }
    50% {
        text-shadow: none;
    }
    100% {
        text-shadow: 0 0 2px #ffffff, 0 0 4px #ffffff, 0 0 6px #f125e7, 0 0 7px  #f125e7, 0 0 14px #f125e7, 0 0 14px #000000;
    }
`;

const Title = styled(motion.h1)`
    position: absolute;
    font-size: 200px;
    background: #eaff9e;

    background-clip: text;
    color: transparent;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: ${neonAnimation} 3s infinite;
`;

function Home() {
    return (
        <>
            <section id="home">
                <Title
                    initial={{ opacity: 0, top: '-50%' }}
                    animate={{
                        opacity: 1,
                        top: '30%',
                        transition: {
                            delay: 0.5,
                            duration: 2,
                            type: 'tween',
                        },
                    }}
                >
                    PORTFOLIO
                </Title>
                <Wrapper>
                    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <a href="#about">
                            <motion.path
                                variants={svg}
                                initial="start"
                                animate="end"
                                transition={{
                                    default: { duration: 2 },
                                    fill: { duration: 1, delay: 0.5 },
                                }}
                                d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L201 10.3zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V381c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z"
                            />
                        </a>
                    </Svg>
                </Wrapper>
            </section>
        </>
    );
}

export default Home;
