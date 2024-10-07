import styled from 'styled-components';
import { GWrapper, SectionHeader } from '../../GlobalComponents';
import Newproject from '../../asset/imgs/신규페이지.png';
//swiper 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import WorksData from './WorksData';
SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

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
    margin-top: 50px;
    margin-bottom: 100px;
    width: 1140px;
`;

const IdContainer = styled.div`
    padding: 5rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    &:nth-child(even) {
        align-items: flex-start;
    }

    &:nth-child(odd) {
        align-items: flex-end;
    }
`;
const Idsection = styled.div`
    width: 44%;
    padding: 5rem 0;
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
    display: flex;
    align-items: left;
    justify-content: left;
    margin-top: 30px;
    width: 100%;
    text-align: center;
    color: white;
    white-space: pre-line; // 줄바꿈
    font-size: 1.2rem;
    @media (max-width: 1000px) {
        top: 300px;
        font-size: 10px;
    }
`;

const Summary2 = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -80px;
    width: 100%;
    color: #000;
    font-size: 1.2rem;
`;

const Skill = styled.p`
    display: flex;
    align-items: left;
    justify-content: left;
    font-size: 1rem;
    color: #fff;
    margin-top: 1rem;
    width: 100%;
    color: #999999;
`;

const Skill2 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #fff;
    margin-top: 1rem;
    width: 100%;
    color: #999999;
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
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
    opacity: 1;
    transition: background-color 0.5s ease, opacity 0.5s ease;
    &:hover {
        opacity: 0;
    }
`;

const Name = styled.p`
    color: white;
    position: absolute;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    top: 20%;

    @media (max-width: 1000px) {
        font-size: 40px;
        margin-top: -22px;
    }
    @media (max-width: 700px) {
        font-size: 20px;
        margin-top: -22px;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    padding: 15px 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    box-shadow: 0 0 10px #040404;
    @media (max-width: 1000px) {
        margin-left: 10px;
        width: 30vh;
        height: 30vh;
        margin-top: 100px;
    }
`;

const LearnMoreButton = styled.button`
    position: absolute;
    padding: 10px 20px;
    bottom: 30%;
    background-color: #57b79c;
    color: white;

    outline: 1px solid #fff;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #17c292;
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

const Image = styled.img`
    /* display: block; */
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProjectItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const StyledSwiper = styled(Swiper)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media (max-width: 1000px) {
        margin-top: -450px;
    }
`;

const Homepage = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    margin-top: 12px;
    background-color: black;
    a {
        color: white;
        outline: none;
        text-decoration: none;
    }
    &:hover {
        background-color: white;
    }
    &:hover a {
        color: black;
    }
`;

const Detail = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        text-align: center;
        font-weight: 700;
        line-height: 1em;
    }
`;

const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform-style: preserve-3d;
    transform-origin: left;
    background: #000;
    transition: 1s;
    .front,
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .front {
        z-index: 1;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .back {
        transform: rotateY(180deg);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;
const Book = styled.div`
    width: 100%;
    background-color: white;
    width: 500px;
    height: 600px;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
    transition: 1s;
    &:hover {
        transform: translateX(-30%);
    }
    &:hover ${ImgBox} {
        transform: rotateY(-180deg);
    }
`;

const Works = () => {
    return (
        <GWrapper>
            <Back>
                <Contents>
                    <SectionHeader text="Works" />
                    <IdContainer>
                        <ID>01</ID>
                        <Title2>발송 OK</Title2>
                    </IdContainer>

                    <StyledSwiper
                        spaceBetween={20} // 슬라이더 간격
                        slidesPerView={2} // 슬라이더 개수
                        centeredSlides={true} //슬라이더가 항상 중앙에위치하게
                        centerInsufficientSlides={true} // 슬라이드 수가 slidesPerView보다 적을 경우에도 슬라이드가 중앙에 배치
                        navigation={true} // 슬라이더 prev,next
                        pagination={{ clickable: true }}
                        initialSlide={0} //슬라이더 시작
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 30, // 회전 각도
                            stretch: 0, // 슬라이드 간의 간격 조정
                            depth: 200, // 입체 효과의 깊이
                            modifier: 1, // 슬라이드 사이의 거리
                            slideShadows: false, // 슬라이드 그림자
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false, // 사용자 만진 후에도 자동 전환 유지
                        }}
                    >
                        <ProjectItem>
                            {WorksData.map((work) => (
                                <StyledSwiperSlide key={work.id}>
                                    <ProjectItem key={work.id}>
                                        <ImageContainer>
                                            <Image src={work.imageUrl} alt="Works" />
                                            <Overlay>
                                                <Name>{work.name}</Name>
                                            </Overlay>
                                        </ImageContainer>
                                    </ProjectItem>
                                </StyledSwiperSlide>
                            ))}
                        </ProjectItem>
                    </StyledSwiper>
                    <Info>
                        <Summary>
                            발송 OK 홈페이지 메인페이지 제외 상세페이지 웹디자인 작업 및 페이지 내에 모든 기본 Alert창
                            새롭게 수정{' '}
                        </Summary>
                        <Skill>Figma , Photoshop , Sweetalert (라이브러리)</Skill>
                        <Homepage>
                            <a href="https://balsongok.com" target="_blank">
                                홈페이지
                            </a>
                        </Homepage>
                    </Info>

                    <IdContainer>
                        <Idsection>
                            <ID>02</ID>
                            <Title2>자사 신규 서비스 페이지 제작</Title2>
                        </Idsection>
                        <Book>
                            <ImgBox>
                                <div className="front">
                                    <img src={Newproject} alt="Front Image" />
                                </div>
                                <div className="back">
                                    <img src={Newproject} alt="Back Image" />
                                </div>
                            </ImgBox>
                            <Detail>
                                <Content>
                                    <Summary2>
                                        <p>발송 OK 후속 신규 서비스 발송페이지</p> 와이어프레임 & 퍼블리싱 작업
                                    </Summary2>
                                    <Skill2>FIGMA , HTML , CSS </Skill2>
                                    <LearnMoreButton>
                                        <a href="dongry_portfolio/workdata/work.html" target="_blank">
                                            바로가기
                                        </a>
                                    </LearnMoreButton>
                                </Content>
                            </Detail>
                        </Book>
                    </IdContainer>
                </Contents>
            </Back>
        </GWrapper>
    );
};

export default Works;
