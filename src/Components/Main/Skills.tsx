import styled from 'styled-components';
import SkillsData from './SkillsData';
import { SectionHeader } from '../../GlobalComponents';
import { LeftArrow, RightArrow } from '../util/Utill';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Tech {
    id: number;
    name: string;
    svg: string;
    comment: string;
}

const Inner = styled.div`
    width: 50%;
    margin: 0 auto;
`;

const Contents = styled.ul`
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 0.9rem; */
    grid-gap: 3rem;
`;

const Box = styled.div`
    width: 600px;
    height: 300px;
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transition-delay: 0.2s;

    &:nth-child(3n + 1) {
        transform: translate(-100px, 0, -400px, 100px) scale(0);
    }
    &:nth-child(3n + 2) {
        transform: translate(100px, 400px, 200px, 0) scale(0);
    }
    &:nth-child(3n + 3) {
        transform: translate(400px, 0) scale(0);
    }

    &.active {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
`;

const TechStackBox = styled.li`
    font-weight: 600;
    padding: 2rem 1rem 1rem 2rem;
    margin-left: 50px;
`;
const TechStackIcon = styled.div`
    display: flex;
    width: 6rem;
    height: 6rem;
    img {
        display: block;
        height: 100%;
    }
    p {
        margin-left: 1.5rem;
        position: relative;
        top: 1.2rem;
        font-size: 2.2rem;
    }
`;

const Comment = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 0;
`;

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Arrow = styled.div`
    margin-top: -1000px;
`;

const Imghover = styled.img`
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.3) translate(-20%, -20%);
    }
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
            <motion.div initial="initial" animate="in" exit="out" variants={pageMove} transition={pageTransition}>
                <Back>
                    <Arrow>
                        <Link to={'/projects'}>
                            <LeftArrow />
                        </Link>
                    </Arrow>

                    <Inner ref={containerRef}>
                        <SectionHeader text=" SKILL" />

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
                    <Arrow>
                        <Link to="/footer">
                            {' '}
                            <RightArrow />
                        </Link>
                    </Arrow>
                </Back>
            </motion.div>
        </section>
    );
};

export default Skills;
