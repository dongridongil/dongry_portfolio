import styled, { keyframes } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { LiaCentercode } from 'react-icons/lia';

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Main = styled.div`
    position: absolute;

    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Text = styled.h2`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    font-size: 15vw;
    text-align: center;
    text-transform: uppercase;
    line-height: 100vh;
    mix-blend-mode: screen;
`;

function Home() {
    return (
        <>
            <section id="home">
                <Wrapper>
                    <Main>
                        <video autoPlay muted loop>
                            <source src="react-port/bgseoul.mp4" type="video/mp4" />
                        </video>
                        <Text>PORTFOLIO</Text>
                    </Main>
                </Wrapper>
            </section>
        </>
    );
}

export default Home;
