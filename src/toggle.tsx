import { useRef, useState } from 'react';
import styled from 'styled-components';

const ToggleDiv = styled.div<{ active: boolean }>`
    position: absolute;
    right: 100px;
    top: 50px;
    display: block;
    width: 160px;
    height: 80px;
    cursor: pointer;
    border-radius: 80px;
    background: #222;
    transition: 0.5s;
    box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1), inset 0 8px 8px rgba(0, 0, 0, 0.1),
        inset 0 -4px 4px rgba(96, 62, 62, 0.1);

    .indicator {
        position: absolute;
        top: 0;
        left: ${({ active }) => (active ? '80px' : '0')};
        width: 80px;
        height: 80px;
        background: linear-gradient(to bottom, #444, #222);
        border-radius: 50%;
        transform: scale(0.9);
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5), inset 0 4px 4px rgba(255, 255, 255, 0.2),
            inset 0 -4px 4px rgba(255, 255, 255, 0.2);
        transition: 0.5s;
    }
`;

const Toggle = () => {
    const [active, setActive] = useState(false);
    const togleRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        setActive((prev) => !prev);
    };

    return (
        <ToggleDiv id="toggle" active={active} ref={togleRef} onClick={handleClick}>
            <i className="indicator"></i>
        </ToggleDiv>
    );
};

export default Toggle;
