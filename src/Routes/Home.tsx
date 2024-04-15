import styled, { keyframes } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { LiaCentercode } from 'react-icons/lia';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const neonAnimation = keyframes`
     0% {
        text-shadow: 0 0 2px #ffffff, 0 0 4px #ffffff, 0 0 6px #ffffff, 0 0 7px #ffffff, 0 0 50px #e31b6d, 0 0 24px #ffffff;
    }
    50% {
        text-shadow: none;
    }
    100% {
        text-shadow: 0 0 2px #ffffff, 0 0 4px #ffffff, 0 0 6px #ffffff, 0 0 7px  #ffffff, 0 0 50px #e31b6d, 0 0 24px #ffffff;
    }
`;

const StyledTitle = styled(motion.h1)`
    position: absolute;
    font-size: 300px;
    background: #464646;
    background-clip: text;
    color: transparent;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: ${neonAnimation} 4s infinite;
`;
const textVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

const text = 'PORTFOLIO';

const Button = styled(motion.div)`
    cursor: pointer;
    border: none;
    color: #000000;
    font-size: 350px;
    margin-top: 400px;
    opacity: 0;
    transition: opacity 2s ease;
    &:hover {
        opacity: 1;
    }
`;
function Home() {
    const [showButton, setShowButton] = useState(false);

    return (
        <>
            <section id="home">
                <Wrapper>
                    <div>
                        <StyledTitle
                            initial="hidden"
                            animate={'visible'}
                            onAnimationComplete={() => setShowButton(true)}
                        >
                            {text.split('').map((text, index) => (
                                <motion.span key={index} variants={textVariants} transition={{ delay: index * 0.3 }}>
                                    {text}
                                </motion.span>
                            ))}
                        </StyledTitle>
                    </div>

                    {showButton && (
                        <Button>
                            <a href="#about">
                                {/* <LiaCentercode /> */}
                                <BiLogoLinkedinSquare />
                            </a>
                        </Button>
                    )}
                </Wrapper>
            </section>
        </>
    );
}

export default Home;
