import styled from 'styled-components';
import SkillsData from './SkillsData';
import { useEffect, useRef } from 'react';
import { SectionHeader2 } from '../../GlobalComponents';

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-bottom: 200px;
    @media (max-width: 500px) {
        overflow-x: hidden;
        margin: 0;
    }
`;

interface Tech {
    id: number;
    name: string;
    svg: string;
    comment: string;
}

const Inner = styled.div`
    width: 50%;
    margin: 0 auto;
    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Contents = styled.ul`
    color: white;
    display: grid;

    grid-template-columns: 1fr 1fr;
    /* gap: 0.9rem; */
    grid-gap: 3rem;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const Box = styled.div`
    width: 600px;
    height: 300px;
    opacity: 0;

    transition: transform 0.8s ease, opacity 0.5s ease;
    transition-delay: 0.2s;

    @media (max-width: 500px) {
        margin-bottom: 30px;
        width: 30vh;
        height: 15vh;
    }

    &:nth-child(2n) {
        transform: translateX(400px) scale(0);
    }

    &:nth-child(2n + 1) {
        transform: translateX(-400px) scale(0);
    }

    &.active {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
`;

const TechStackBox = styled.li`
    color: ${(props) => props.theme.textColor};
    font-weight: 600;
    padding: 2rem 1rem 1rem 2rem;
    margin-left: 50px;

    @media (max-width: 500px) {
        margin-left: auto;
    }
`;
const TechStackIcon = styled.div`
    display: flex;
    width: 6rem;
    height: 6rem;
    @media (max-width: 500px) {
        width: 5rem;
        height: 5rem;
    }
    img {
        display: block;
        height: 100%;
        @media (max-width: 500px) {
            height: 50%;
        }
    }
    p {
        color: black;
        margin-left: 1.5rem;
        position: relative;
        top: 1.2rem;
        font-size: 2.5rem;
        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
`;

const Comment = styled.span`
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    color: black;
    @media (max-width: 500px) {
        font-size: 0.7rem;
        width: 160px;
    }
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 0;
    @media (max-width: 500px) {
        margin-top: -50px;
    }
`;

const Imghover = styled.img`
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.3) translate(-20%, -20%);
    }
`;

const Skills = () => {
    const TechStack = SkillsData.map((tech: Tech) => ({
        id: tech.id,
        name: tech.name,
        svg: tech.svg,
        comment: tech.comment,
    }));

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const boxes = containerRef.current.querySelectorAll('.box');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            });

            boxes.forEach((box) => observer.observe(box));

            return () => {
                boxes.forEach((box) => observer.unobserve(box));
            };
        }
    }, []);
    return (
        <section id="skill">
            <Back>
                <Inner ref={containerRef}>
                    <SectionHeader2 text=" Skills" />
                    <Contents>
                        {TechStack.map((tech) => (
                            <Box key={tech.id} className="box">
                                <TechStackBox key={tech.id}>
                                    <TechStackIcon>
                                        <Imghover src={tech.svg} />
                                        <p>{tech.name}</p>
                                    </TechStackIcon>
                                    <FlexColumn>
                                        <Comment>{tech.comment}</Comment>
                                    </FlexColumn>
                                </TechStackBox>
                            </Box>
                        ))}
                    </Contents>
                </Inner>
            </Back>
        </section>
    );
};

export default Skills;
