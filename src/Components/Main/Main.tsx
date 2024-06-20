import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100%; /* 추가 */
    overflow-x: hidden; /* 모바일 뷰포트에서의 넘침 방지 */

    @media (max-width: 500px) {
        overflow-x: hidden;
        margin: 0;
    }
`;
const H2 = styled.h2`
    margin-bottom: 400px;
    position: absolute;
    color: #fff;
    font-size: 10em;
    font-weight: 700;
    padding: 0 100px;
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        font-size: 0.6em; /* 작은 화면에서 글자 크기 조정 */
        padding: 0 0; /* 작은 화면에서 패딩 조정 */
        margin-bottom: 100px; /* 마진 조정 */
    }
`;

const Im = styled.h2`
    color: ${(props) => props.theme.ImColor};
    font-size: 0.8em;
    font-weight: 600;
    padding: 50px 20px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        font-size: 3em; /* 작은 화면에서 글자 크기 조정 */
        padding: 0 0; /* 작은 화면에서 패딩 조정 */
    }
`;

const displayanimation = keyframes`
  0% {
    display: inline-block;
  }
  33.33%,100% {
    display: none;
  }

`;
const textanimation = keyframes`

  0%,10%{
    width:0%
  }
  70%,90% {
    width:100%;
  }

`;

interface SpanProps {
    index: number;
    'data-text': string;
}

const Span = styled.span<SpanProps>`
    --i: ${(props) => props.index || 0};
    position: relative;
    margin-left: 50px;
    color: rgba(255, 255, 255, 0.1);
    animation: ${displayanimation} 9s infinite;
    animation-delay: calc(-3s * var(--i));

    @media (max-width: 500px) {
        font-size: 3em; /* 작은 화면에서 글자 크기 조정 */
        margin-left: 0;
        margin-bottom: 100px; /* 마진 조정 */
    }
    &::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        white-space: nowrap; /* 한 줄로 유지 */
        color: ${(props) => props.theme.neonColor};
        overflow: hidden;
        border-right: 4px solid ${(props) => props.theme.neonColor};
        filter: drop-shadow(0 0 3px ${(props) => props.theme.neonColor})
            drop-shadow(0 0 10px ${(props) => props.theme.neonColor});
        animation: ${textanimation} 3s linear;
    }
`;

/* 입장 버튼*/
const Enter = styled.div`
    text-decoration: none !important;
    position: relative;
    margin-top: 700px;
    display: inline-block;
    padding: 45px 60px;
    color: ${(props) => props.theme.neonColor};
    text-transform: 4px;
    letter-spacing: 4px;

    font-size: 2.5rem;
    overflow: hidden;
    transition: 0.2s;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 1.5em; /* 작은 화면에서 글자 크기 조정 */
        padding: 20px 30px; /* 작은 화면에서 패딩 조정 */
        margin-top: 250px; /* 마진 조정 */
    }
    &:hover {
        color: #ffffff;
        background: ${(props) => props.theme.neonColor};
        box-shadow: 0 0 10px ${(props) => props.theme.neonColor}, 0 0 40px ${(props) => props.theme.neonColor},
            0 0 80px ${(props) => props.theme.neonColor};
        transition-delay: 1s;
    }
    span {
        position: absolute;
        display: block;
    }

    span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${(props) => props.theme.neonColor});
    }
    &:hover span:nth-child(1) {
        left: 100%;
        transition: 1s;
    }
    span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, ${(props) => props.theme.neonColor});
    }
    &:hover span:nth-child(3) {
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
    }

    span:nth-child(2) {
        top: -100;
        right: 0%;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, ${(props) => props.theme.neonColor});
    }
    &:hover span:nth-child(2) {
        top: 100%;
        transition: 1s;
        transition-delay: 0.25s;
    }

    span:nth-child(4) {
        bottom: -100;
        right: 0%;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, ${(props) => props.theme.neonColor});
    }
    &:hover span:nth-child(4) {
        bottom: 100%;
        transition: 1s;
        transition-delay: 0.75s;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const pageMove = {
    initial: { opacity: 0, x: '100vw' },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '-100vw' },
};

const pageTransition = {
    type: 'tween',
    duration: 0.5,
};

const Main = () => {
    const [enter, setEnter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setEnter(true);
        }, 2000);
        // 클린 업코드 //
        return () => clearTimeout(timer);
    }, []);
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageMove} transition={pageTransition}>
            <Back>
                {/* 자기 소개 부분  */}
                <H2>
                    <Im>i'm</Im>
                    <Span index={0} data-text="안녕하세요 ">
                        안녕하세요
                    </Span>
                    <Span index={2} data-text="개인 포트폴리오 입니다">
                        개인 포트폴리오 입니다
                    </Span>
                    <Span index={1} data-text="살펴 가세요 ">
                        살펴 가세요
                    </Span>
                </H2>
                {/* 입장 버튼*/}
                {enter && (
                    <Enter>
                        <StyledLink to="/projects">
                            <span />
                            <span />
                            <span />
                            <span />
                            ENTER
                        </StyledLink>
                    </Enter>
                )}
            </Back>
        </motion.div>
    );
};

export default Main;
