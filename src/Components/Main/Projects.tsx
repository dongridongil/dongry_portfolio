import styled from 'styled-components';
import { GArea, GInner, GWrapper, SectionHeader } from '../../GlobalComponents';
import React, { useState } from 'react';
import ProjectsData, { Project } from './ProjectsData';
import { IoMdClose } from 'react-icons/io';
import { IoEnter } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Contents = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 50px;
    margin-bottom: 100px;
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
`;

const Name = styled.p`
    position: absolute;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    top: 80px;
`;

const Skill = styled.p`
    position: absolute;
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    color: #e31b6d;
    top: 120px;
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
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
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
`;

const ModalBackgroundimg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const ModalBackground = styled.div`
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
`;

const ModalButton = styled.button`
    position: absolute;
    font-size: 17px;
    font-weight: 520;
    bottom: 50px;
    left: 45px;
    padding: 12px 30px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #e31b6d;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;

    svg {
        margin-right: 10px;
    }

    &:hover {
        color: #e31b6d;
        background-color: white;
    }
`;

const Title = styled.h2`
    font-size: 32px;
`;

const Summary = styled.p`
    position: absolute;
    white-space: pre-line; // 줄바꿈
    font-size: 18px;
    left: 47px;
    top: 550px;
`;

const Underscore = styled.p`
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 600px;
    height: 1px;
    background-color: #aeabab;
`;
const TitleContainer = styled.div`
    position: absolute;
    top: 485px;
    left: 45px;
`;

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

const LeftArrow = styled.div`
    width: 100px;
    height: 100px;
    transition: 0.5s;
    float: left;
    box-shadow: -2px 2px 0 rgba(255, 255, 255, 1);
    transform: rotate(45deg);
    margin-left: 200px;
    cursor: pointer;
    &:hover {
        box-shadow: -20px 20px 0 #01fe87;
    }
`;
const RightArrow = styled.div`
    width: 100px;
    height: 100px;
    transition: 0.5s;
    float: left;
    margin-right: 200px;
    box-shadow: -2px 2px 0 rgba(255, 255, 255, 1);
    transform: rotate(225deg);
    cursor: pointer;
    &:hover {
        box-shadow: -20px 20px 0 #01fe87;
    }
`;

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
