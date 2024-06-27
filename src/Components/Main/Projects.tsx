import styled from 'styled-components';
import { GArea, GInner, GWrapper, SectionHeader } from '../../GlobalComponents';
import React, { useState } from 'react';
import ProjectsData, { Project } from './ProjectsData';
import { IoMdClose } from 'react-icons/io';
import { IoEnter } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { LeftArrow, RightArrow } from '../util/Utill';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

//swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const Header = styled.div`
    position: absolute;
    width: 100%;
    height: 100px;
    z-index: 10;

    a {
        position: absolute;
        top: -100px;
        color: #000;
        text-decoration: none;
        font-size: 24px;

        &:first-child {
            left: -100px;
        }

        &:last-child {
            right: -100px;
        }
    }
`;

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
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
    margin-top: 100px;
    border-radius: 30px;
    width: 1200px;
    height: 800px;
    background-position: center;
    background-size: cover;
    box-shadow: 0 0 10px #040404;
    @media (max-width: 1000px) {
        margin-left: 10px;
        width: 30vh;
        height: 30vh;
    }
`;

const Image = styled.img`
    /* display: block; */
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledSwiper = styled(Swiper)`
    width: 80%;
    z-index: 1;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    margin-top: -250px;
    width: 600px;
    height: 1200px;

    /* /* height: auto; */
`;

const ProjectItem = styled.li`
    position: relative;
    cursor: pointer;

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
    font-size: 60px;
    top: 80px;

    @media (max-width: 1000px) {
        font-size: 40px;
        margin-top: -22px;
    }
`;

const Skill = styled.p`
    position: absolute;
    font-weight: 600;
    text-align: center;
    font-size: 36px;
    color: #e31b6d;
    top: 200px;
    @media (max-width: 1000px) {
        font-size: 22px;
        margin-top: -20px;
    }
`;
const LearnMoreButton = styled.button`
    position: absolute;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    bottom: 150px;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
    @media (max-width: 1000px) {
        bottom: 50px;
    }
`;

///모달창 부분

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 850px;
    height: 900px;

    background-color: white;

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    z-index: 1000; //화면 상위로 이동

    @media (max-width: 1000px) {
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
    width: 850px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
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
    @media (max-width: 1000px) {
        font-size: 18px;
        margin-bottom: -27px;
    }
`;

const ModalButton = styled.button`
    position: absolute;
    background-color: white;
    bottom: 60px;
    left: 60px;

    border: none;

    text-align: center;

    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        font-size: 10px;
        padding: 8px 12px;
        margin-bottom: -30px;
    }
    svg {
        margin-right: 10px;
    }

    &:hover {
        color: #323138;
        background-color: white;
    }
`;

const Title = styled.h2`
    font-size: 34px;
    color: black;
    font-weight: 700;
    margin-top: 20px;
    @media (max-width: 1000px) {
        font-size: 28px;
        margin-top: -10px;
    }
`;

const Underscore = styled.p`
    position: absolute;
    bottom: -15px;
    margin-bottom: 10px;
    left: 0;
    width: 760px;
    height: 1px;
    background-color: #aeabab;
    @media (max-width: 1000px) {
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
    top: 600px;

    @media (max-width: 1000px) {
        top: 300px;
        font-size: 10px;
    }
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 500px;
    left: 45px;

    @media (max-width: 1000px) {
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
            <SectionHeader text=" PROJECT" />
            <Header>
                <Link to={'/'}>
                    <LeftArrow />
                </Link>
                <Link to={'/skills'}>
                    <RightArrow />
                </Link>
            </Header>
            <StyledSwiper
                spaceBetween={20} // 슬라이더 간격
                slidesPerView={3} // 슬라이더 개수(3개를 보이게하려면 2.5가 맞음)
                centeredSlides={true} //슬라이더가 항상 중앙에위치하게
                centerInsufficientSlides={true} // 슬라이드 수가 slidesPerView보다 적을 경우에도 슬라이드가 중앙에 배치
                navigation={true} // 슬라이더 prev,next
                pagination={{ clickable: true }}
                initialSlide={0}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30, // 회전 각도
                    stretch: 0, // 슬라이드 간의 간격 조정
                    depth: 200, // 입체 효과의 깊이
                    modifier: 1, // 슬라이드 사이의 거리
                    slideShadows: false, // 슬라이드 그림자
                }}
                // breakpoints={{
                //     1000: {
                //         slidesPerView: 1,
                //         spaceBetween: 10,
                //     },
                // }}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false, // 사용자 만진 후에도 자동 전환 유지
                // }}
            >
                <motion.div initial="initial" animate="in" exit="out" variants={pageMove} transition={pageTransition}>
                    <Back>
                        <GInner>
                            <GArea>
                                <Contents>
                                    {ProjectsData.map((project) => (
                                        <StyledSwiperSlide key={project.id}>
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
                                        </StyledSwiperSlide>
                                    ))}
                                </Contents>
                            </GArea>
                        </GInner>
                    </Back>
                </motion.div>
            </StyledSwiper>

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
                                    <FaHome style={{ width: '50px', height: '50px' }} />
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
