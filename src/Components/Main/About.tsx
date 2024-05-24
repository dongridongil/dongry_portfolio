import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Back = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #262626;
    background-image: linear-gradient(to right, #333 1px, transparent 1px),
        linear-gradient(to bottom, #333 1px, transparent 1px);
    background-size: 5vh 5vh;
`;
const H2 = styled.h2`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    margin-bottom: 260px;
    position: absolute;
    color: #fff;
    font-size: 10em;
    font-weight: 700;
    padding: 0 100px;
`;

const Im = styled.h2`
    color: #fff;
    font-size: 0.8em;
    font-weight: 600;
    padding: 50 20px;
    margin-bottom: 20px;
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

  0%,10%,100%{
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
    animation: ${displayanimation} 12s infinite;
    animation-delay: calc(-4s * var(--i));

    &::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        white-space: nowrap; /* 한 줄로 유지 */
        color: #01fe87;
        overflow: hidden;
        border-right: 4px solid #01fe87;
        filter: drop-shadow(0 0 5px #01fe87) drop-shadow(0 0 15px #01fe87);
        animation: ${textanimation} 4s linear infinite;
    }
`;

/* 입장 버튼*/
const Enter = styled.a`
    position: absolute;

    margin-top: 700px;
    display: inline-block;
    padding: 45px 60px;
    color: #01fe87;
    text-transform: 4px;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 2.5rem;
    overflow: hidden;
    transition: 0.2s;
    font-weight: 600;
    &:hover {
        color: #ffffff;
        background: #01fe87;
        box-shadow: 0 0 10px #01fe87, 0 0 40px #01fe87, 0 0 80px #01fe87;
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
        background: linear-gradient(90deg, transparent, #01fe87);
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
        background: linear-gradient(270deg, transparent, #01fe87);
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
        background: linear-gradient(180deg, transparent, #01fe87);
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
        background: linear-gradient(360deg, transparent, #01fe87);
    }
    &:hover span:nth-child(4) {
        bottom: 100%;
        transition: 1s;
        transition-delay: 0.75s;
    }
`;

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
        <section id="about">
            <div>
                <Back>
                    {/* 자기 소개 부분  */}
                    <H2>
                        <Im>i'm</Im>
                        <Span index={0} data-text="안녕하세요 웹 개발자">
                            안녕하세요 웹 개발자
                        </Span>
                        <Span index={2} data-text="김동일 입니다.">
                            김동일 입니다.
                        </Span>
                        <Span index={1} data-text="잘 부탁 드립니다 😎">
                            잘 부탁 드립니다 😎
                        </Span>
                    </H2>
                    {/* 입장 버튼*/}
                    {enter && (
                        <Enter href="#home">
                            <span />
                            <span />
                            <span />
                            <span />
                            ENTER
                        </Enter>
                    )}
                </Back>
            </div>
        </section>
    );
};

export default Main;
