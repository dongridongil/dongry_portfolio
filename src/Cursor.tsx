import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Mouseanimate = keyframes`
    0% {
        filter:drop-shadow(0 0 10px #0f0) drop-shadow(0 0 30px #0f0)
        drop-shadow(0 0 45px #0f0) hue-rotate(0deg)
    }
    100% {
        filter:drop-shadow(0 0 10px #0f0) drop-shadow(0 0 30px #0f0)
        drop-shadow(0 0 45px #0f0) hue-rotate(360deg)
    }
`;

const Cursor = styled.div<{ x: number; y: number }>`
    position: fixed;
    top: ${({ y }) => y}px;
    left: ${({ x }) => x}px;
    width: 30px;
    height: 30px;
    border-top: 6px solid #0f0;
    border-left: 6px solid #0f0;
    transform-origin: top;
    transform: translate(-1px, 5px) rotate(0deg) scale(1);
    pointer-events: none;
    animation: ${Mouseanimate} 5s linear infinite;

    &::before {
        content: '';
        position: absolute;
        left: -2.6px;
        width: 8px;
        height: 50px;
        background: #0f0;
        transform-origin: top;
        transform: rotate(315deg);

        /* left: -2.5px;
        width: 5px;
        height: 40px;
        background: #0f0;
        transform-origin: top;
        transform: rotate(315deg); */
    }
`;

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <Cursor x={position.x} y={position.y} />;
};

export default CustomCursor;
