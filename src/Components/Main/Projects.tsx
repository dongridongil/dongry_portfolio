import styled from 'styled-components';
import { GWrapper, SectionHeader } from '../../GlobalComponents';
import ProjectsData from './ProjectsData';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Back = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`;

const Contents = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 100px;
    width: 1140px;
`;

const IdContainer = styled.div`
    width: 70%;
`;
const ID = styled.h2`
    font-size: 1.5rem;
    color: red;
    display: flex;
`;

const Title2 = styled.div`
    font-size: 2rem;
    color: white;
`;

const Summary = styled.p`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 80%;
    text-align: center;
    color: white;
    white-space: pre-line; // 줄바꿈
    font-size: 1rem;

    @media (max-width: 1000px) {
        top: 300px;
        font-size: 10px;
    }
`;
const Skill = styled.p`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #fff;
    margin-top: 1rem;
    width: 50%;
    color: #999999;
`;

const Info = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
`;

const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    padding: 15px 0;
    border-radius: 4px;
    width: 70%;
    background-position: center;
    background-size: cover;
    box-shadow: 0 0 10px #040404;
    @media (max-width: 1000px) {
        margin-left: 10px;
        width: 30vh;
        height: 30vh;
        margin-top: 100px;
    }
`;

const Image = styled.img`
    /* display: block; */
    width: 100%;
    height: 500px;
    object-fit: cover;
`;

const ProjectItem = styled.li`
    padding: 12rem 0 13rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    &:nth-child(even) {
        align-items: flex-start;
    }

    &:nth-child(odd) {
        align-items: flex-end;
    }

    &:hover ${Image} {
        opacity: 0;
        transition: opacity 1s ease;
    }

    &:hover ${Overlay} {
        opacity: 1;
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const Name = styled.p`
    color: white;
    position: absolute;
    text-align: center;
    font-weight: 600;
    font-size: 3rem;
    top: 30%;

    @media (max-width: 1000px) {
        font-size: 40px;
        margin-top: -22px;
    }
    @media (max-width: 700px) {
        font-size: 20px;
        margin-top: -22px;
    }
`;

const LearnMoreButton = styled.button`
    position: absolute;
    padding: 10px 20px;
    bottom: 30%;
    background-color: #007bff;
    color: white;

    outline: 1px solid #fff;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
    a {
        color: white;
        outline: none;
        text-decoration: none;
    }
    @media (max-width: 1000px) {
        bottom: 50px;
    }
    @media (max-width: 700px) {
        bottom: 5;
    }
`;

const Projects = () => {
    const contentsRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (contentsRef.current) {
            const sections = contentsRef.current.querySelectorAll("li[role='listitem']");

            sections.forEach((section: Element) => {
                const Motion = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                        end: 'top top',
                        scrub: 0.5,
                    },
                });

                Motion.set(section, { opacity: 0 }).to(section, { opacity: 1, duration: 1 });
            });
        }
    }, []);

    return (
        <GWrapper>
            <Back>
                <Contents ref={contentsRef}>
                    <SectionHeader text=" Projects" />

                    {ProjectsData.map((project) => (
                        <ProjectItem key={project.id} role="listitem">
                            <IdContainer>
                                <ID>{project.id}</ID>
                                <Title2>{project.name}</Title2>
                            </IdContainer>
                            <ImageContainer>
                                <Image src={project.imageUrl} alt="Projects" />
                                <Overlay>
                                    <Name>{project.name}</Name>
                                    <LearnMoreButton>
                                        <a href={project.url} target="_blank">
                                            바로가기
                                        </a>
                                    </LearnMoreButton>
                                </Overlay>
                            </ImageContainer>
                            <Info>
                                <Summary>{project.summary}</Summary>
                                <Skill>{project.skill}</Skill>
                            </Info>
                        </ProjectItem>
                    ))}
                </Contents>
            </Back>
        </GWrapper>
    );
};

export default Projects;
