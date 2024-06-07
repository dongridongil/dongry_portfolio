import styled from 'styled-components';
import { GArea, GInner, GWrapper, SectionHeader } from '../../GlobalComponents';
import React, { useState } from 'react';
import ProjectsData, { Project } from './ProjectsData';
import { IoMdClose } from 'react-icons/io';
import { IoEnter } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { LeftArrow, RightArrow } from '../util/Utill';
import { motion } from 'framer-motion';

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
        margin: 0;
    }
`;

const Contents = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 50px;
    margin-bottom: 100px;

    width: 100%;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s ease;
`;
const ImageContainer = styled.div`
    position: relative;

    width: 450px;
    height: 400px;
    overflow: hidden;
    margin-bottom: 50px;
    margin-left: 50px;

    border-radius: 30px;
    box-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px;
    @media (max-width: 500px) {
        margin-left: 10px;
        width: 30vh;
        height: 30vh;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    background-image: cover;
    object-fit: cover;
`;

const ProjectItem = styled.li`
    flex: 0 0 250px;
    position: relative;
    cursor: pointer;

    &:hover ${Image} {
        opacity: 0;
        transition: opacity 1s ease;
    }

    &:hover ${Overlay} {
        opacity: 1;
    }

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-align: center;
    }
`;

const Name = styled.p`
    color: black;
    position: absolute;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    top: 80px;

    @media (max-width: 500px) {
        font-size: 20px;
        margin-top: -22px;
    }
`;

const Skill = styled.p`
    position: absolute;
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    color: #e31b6d;
    top: 120px;
    @media (max-width: 500px) {
        font-size: 16px;
        margin-top: -20px;
    }
`;
const LearnMoreButton = styled.button`
    width: 50%;
    bottom: 60px;
    background-color: white;

    border: 2px solid #e31b6d;
    position: absolute;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    cursor: none !important;
    transition: all 0.5s ease-in-out;

    @media (max-width: 500px) {
        font-size: 12px;
        margin-bottom: -40px;
    }

    &:hover {
        cursor: none !important;
        color: white;
        background-color: #e31b6d;
    }
`;

///모달창 부분

const ModalWrapper = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 800px;

    background-color: white;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    z-index: 1000; //화면 상위로 이동

    @media (max-width: 500px) {
        width: 350px;
        height: 500px;
    }
`;

const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    line-height: 1.5;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

interface ModalImgProps {
    imageUrl?: string;
}

const ModalImg = styled.div<ModalImgProps>`
    width: 700px;
    height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
        width: 350px;
        height: 230px;
    }
`;

const ModalBackgroundimg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const ModalBackground = styled.div`
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 불투명한 배경 */
    z-index: 999; /* 모달 위로 배치 */
`;

const CloseButton = styled.button`
    position: absolute;
    font-size: 28px;
    bottom: 50px;
    right: 45px;
    background-color: white;
    border: none;
    cursor: pointer;
    @media (max-width: 500px) {
        font-size: 18px;
        margin-bottom: -27px;
    }
`;

const ModalButton = styled.button`
    position: absolute;
    font-size: 17px;
    font-weight: 520;
    bottom: 50px;
    left: 45px;
    padding: 12px 30px;
    border: none;
    color: white;
    background-color: #e31b6d;
    text-align: center;

    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
        font-size: 10px;
        padding: 8px 12px;
        margin-bottom: -30px;
    }
    svg {
        margin-right: 10px;
    }

    &:hover {
        color: #e31b6d;
        background-color: white;
    }
`;

const Title = styled.h2`
    font-size: 34px;
    color: black;
    font-weight: 700;
    margin-top: -20px;
    @media (max-width: 500px) {
        font-size: 28px;
        margin-top: -10px;
    }
`;

const Underscore = styled.p`
    position: absolute;
    bottom: -15px;
    margin-bottom: 10px;
    left: 0;
    width: 600px;
    height: 1px;
    background-color: #aeabab;
    @media (max-width: 500px) {
        width: 260px;
    }
`;
const Summary = styled.p`
    margin-top: -10px;
    color: black;
    position: absolute;
    white-space: pre-line; // 줄바꿈
    font-weight: 500;
    font-size: 18px;
    left: 47px;
    top: 550px;
    width: 260px;

    @media (max-width: 500px) {
        top: 300px;
        font-size: 10px;
    }
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 485px;
    left: 45px;

    @media (max-width: 500px) {
        top: 240px;
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

///////////////////////////////////
const Projects = ({ projectsData }: { projectsData: Project[] }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectProject, setSelectProject] = useState<Project | null>(null);

    const openModal = (project: Project) => {
        setSelectProject(project);

        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectProject(null);
        setModalOpen(false);
    };
    const closeModalOnclick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            //배경 클릭시 닫기
            closeModal();
        }
    };
    return (
        <section id="project">
            <motion.div initial="initial" animate="in" exit="out" variants={pageMove} transition={pageTransition}>
                <Back>
                    <Link to={'/'}>
                        <LeftArrow />
                    </Link>

                    <GInner>
                        <SectionHeader text=" PROJECT" />
                        <GArea>
                            <Contents>
                                {ProjectsData.map((project) => (
                                    <ProjectItem key={project.id}>
                                        <ImageContainer>
                                            <Image src={project.imageUrl} alt="Projects" />
                                            <Overlay>
                                                <Name>{project.name}</Name>
                                                <Skill>{project.skill}</Skill>

                                                <LearnMoreButton onClick={() => openModal(project)}>
                                                    LEARN MORE
                                                </LearnMoreButton>
                                            </Overlay>
                                        </ImageContainer>
                                    </ProjectItem>
                                ))}
                            </Contents>
                        </GArea>
                    </GInner>
                    <Link to={'/skills'}>
                        {' '}
                        <RightArrow />{' '}
                    </Link>
                </Back>
            </motion.div>
            {modalOpen && (
                <ModalBackground onClick={closeModalOnclick}>
                    <ModalWrapper>
                        <ModalImg>
                            <ModalBackgroundimg src={selectProject?.backimage} />
                        </ModalImg>
                        <ModalContent>
                            <TitleContainer>
                                <Title>{selectProject?.title}</Title>
                                <Underscore />
                            </TitleContainer>
                            <Summary>{selectProject?.summary}</Summary>

                            <a href={selectProject?.url} target="_blank">
                                <ModalButton>
                                    <IoEnter />
                                    GO HOME
                                </ModalButton>
                            </a>
                            <CloseButton onClick={closeModal}>
                                <IoMdClose />
                            </CloseButton>
                        </ModalContent>
                    </ModalWrapper>
                </ModalBackground>
            )}
        </section>
    );
};

export default Projects;
