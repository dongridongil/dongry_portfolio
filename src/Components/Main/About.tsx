import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { easeIn } from 'framer-motion';
import gsap from 'gsap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
`;

const Intro = styled.div`
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    margin-bottom: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    z-index: 10;
    padding: 0 0 50px 0;
    strong {
        font-size: 45px;
        transition: transform 1.4s;
    }
`;
const Sc_intro = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 100px 0;
    h2 {
        font-size: 36px;
        margin-bottom: 12px;
    }
`;

const StyledIcon = styled(FontAwesomeIcon)<{ $isHovered: boolean }>`
    transition: transform 0.5s ease;
    transform: ${({ $isHovered }) => ($isHovered ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

const Box = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 200px;
    height: 50px;
    border: 3px solid #777777;

    h1 {
        gap: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
    }
    &:hover {
        cursor: pointer;
        background-color: #57b79c;
        border: 1px solid #57b79c;
        color: #fff;
    }
`;

const Main = ({ projectsRef }: any) => {
    const [enter, setEnter] = useState(false);
    const introRef = useRef(null);
    const scRef = useRef(null);

    const clickEnter = () => {
        //console.log(projectsRef, 'projectsRef');
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' }); //부드럽게 이동
        }
    };

    useEffect(() => {
        const intro = gsap.timeline();
        intro.to('.intro', { xPercent: -35, delay: 0.5, duration: 0.1 });
        intro
            .to('.intro01', { opacity: 0, delay: 0.7 })
            .to('.intro02', { opacity: 0, delay: 0.7 })
            .to('.intro03', { opacity: 0, delay: 0.7 })
            .to(introRef.current, { yPercent: -100, delay: 0.4, ease: easeIn })
            .fromTo(
                scRef.current,
                {
                    yPercent: 0,
                    opacity: 0,
                },
                {
                    yPercent: 0,
                    opacity: 1,
                }
            );
    }, []);

    return (
        <Back>
            <Intro ref={introRef}>
                <strong className="intro">
                    <span className="intro01">WEB PUBLISHER </span>
                    <span className="intro02">FRONT END </span>
                    <span className="intro03">PORTFOLIO </span>
                </strong>
            </Intro>
            <Sc_intro ref={scRef}>
                <h2>안녕하세요 SLOW-STARTER 김동일 입니다.</h2>
                <h2>현재 퍼블리셔 & 웹개발자를 희망하고 있습니다.</h2>
                <Box onClick={clickEnter} onMouseOver={() => setEnter(true)} onMouseLeave={() => setEnter(false)}>
                    <h1>
                        입장 하기
                        <StyledIcon icon={faArrowRight} $isHovered={enter} />
                    </h1>
                </Box>
            </Sc_intro>
        </Back>
    );
};

export default Main;
