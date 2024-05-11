import styled from 'styled-components';
import { GArea, GInner, GWrapper, SectionHeader } from '../../GlobalComponents';
import React, { useState } from 'react';
import ProjectsData, { Project } from './ProjectsData';
import { IoMdClose } from 'react-icons/io';
import { IoEnter } from 'react-icons/io5';
// import { Nav, Tab } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Contents = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-top: 50px;
    margin-bottom: 100px;
`;

const Backcolor = styled.div`
    background-color: #f5f5f5;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
const ImageContainer = styled.div`
    position: relative;
    width: 450px;
    height: 400px;
    overflow: hidden;
    margin-bottom: 50px;
    margin-left: 50px;
    border-radius: 30px;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    background-image: cover;
`;

const ProjectItem = styled.li`
    flex: 0 0 250px;
    position: relative;
    cursor: pointer;
    &:hover ${Image} {
        opacity: 0.3;
    }

    &:hover ${Overlay} {
        opacity: 1;
    }
`;

const Name = styled.p`
    position: absolute;
    text-align: center;
    font-weight: 600;
    font-size: 26px;
    top: 60px;
`;

const Skill = styled.p`
    position: absolute;
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    color: #e31b6d;
    top: 90px;
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

const Projects = ({ projectsData }: { projectsData: Project[] }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectProject, setSelectProject] = useState<Project | null>(null);

    const [activeTab, setActivetab] = useState<string>('all');

    const tabChange = (tab: string) => {
        setActivetab(tab);
    };

    const filteredProjects = (): Project[] => {
        if (activeTab === 'all') {
            return ProjectsData;
        } else if (activeTab === 'react') {
            return ProjectsData.filter((project) => project.id >= 1 && project.id <= 4);
        } else if (activeTab === 'js') {
            return ProjectsData.filter((project) => project.id === 5);
        } else if (activeTab === 'vue') {
            return ProjectsData.filter((project) => project.id === 6);
        }
        return [];
    };

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
            <Backcolor>
                <GWrapper>
                    <GInner>
                        <SectionHeader text=" PROJECT" />
                        <GArea>
                            <Tabs
                                defaultActiveKey="all"
                                id="justify-tab-example"
                                className="mb-3 fs-4 fw-bold"
                                justify
                                onSelect={(tab) => tab !== null && tabChange(tab)}
                            >
                                <Tab eventKey="all" title="All"></Tab>
                                <Tab eventKey="react" title="React"></Tab>
                                <Tab eventKey="js" title="Vanilla JS"></Tab>
                                <Tab eventKey="vue" title="Vue"></Tab>
                            </Tabs>

                            <Contents>
                                {filteredProjects().map((project) => (
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
                </GWrapper>
            </Backcolor>
        </section>
    );
};

export default Projects;
