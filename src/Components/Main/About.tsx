import styled from 'styled-components';
import { GArea, GInner, GWrapper, SectionHeader } from '../../GlobalComponents';
import DI from '../../asset/imgs/dongil.png';
import di from '../../asset/imgs/realdongil.png';
import { useState } from 'react';

const Wrapper = styled(GWrapper)`
    &::before {
        content: '';
        position: absolute;
        top: 0rem;
        left: 0;
        width: 100%;
        height: 18rem;
    }
`;

const Contents = styled(GArea)`
    display: flex;
    justify-content: space-around;
    margin-bottom: 300px;
`;

const Area = styled.div``;

const ImgArea = styled(Area)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        display: block;
        width: 500px;
    }

    @media (max-width: 500px) {
        img {
            width: 50%;
        }
    }
`;

const TextArea = styled(Area)``;

const Title = styled.h2`
    font-size: 3.7rem;
    font-weight: 700;
`;

const Paragraph = styled.p`
    padding-top: 1.2rem;
    font-size: 2rem;
    font-weight: 500;
`;

const IconWrapper = styled.div`
    position: absolute;
    bottom: 27%;
    right: 60%;
`;

const Contact = styled.span`
    width: 100px;
    height: 50px;

    bottom: 360px;
    border-radius: 10px;
    border: none;
    background-color: #dae028;
    color: white;
    position: absolute;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding: 15px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        font-size: 19px;
        color: white;
        background-color: #358aa4;
    }
`;

const Main = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <section id="about">
            <Wrapper>
                <GInner>
                    <SectionHeader text="ABOUT" />
                    <Contents>
                        <ImgArea onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
                            {!isHover && ( //호버가되면 클릭이미지안보임
                                <IconWrapper></IconWrapper>
                            )}

                            {isHover ? <img src={di} /> : <img src={DI} />}
                        </ImgArea>

                        <TextArea>
                            <Title>
                                안녕하세요!
                                <br /> 웹 개발자 김동일 입니다.
                            </Title>
                            <Paragraph>
                                <br />
                                백엔드 개발자로 시작하여 풀스택을 지향하는 개발자로 성장하기
                                <br />
                                <br />
                                위해 프론트엔드 를 집중적으로 공부 중입니다.
                                <br />
                                <br />
                                <span style={{ color: '#e31b6d', fontSize: '40px' }}>React </span>와{' '}
                                <span style={{ color: '#e31b6d', fontSize: '40px' }}>Vue JS</span> 그리고{' '}
                                <span style={{ color: '#e31b6d', fontSize: '40px' }}>TypeScript</span> 등을 습득하고
                                있으며,
                                <br />
                                <br />
                                필요한 기술들을 추가적으로 학습 중입니다.
                                <br />
                                <br />
                                아래는 그동안 제가 작업한 결과물과 사용가능한 기술스택입니다.
                                <br />
                                <br />
                                감사합니다 💘
                                <Contact style={{ left: '1100px' }}>
                                    <a href="https://github.com/dongridongil" target="blank">
                                        GitHub
                                    </a>
                                </Contact>
                                <Contact style={{ left: '1220px' }}>
                                    <a href="https://velog.io/@ehddlfwkd/posts" target="blank">
                                        Velog
                                    </a>
                                </Contact>
                            </Paragraph>
                        </TextArea>
                    </Contents>
                </GInner>
            </Wrapper>
        </section>
    );
};

export default Main;
