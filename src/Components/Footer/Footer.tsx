import styled from 'styled-components';
import Gitimg from '../../asset/imgs/git-hub.png';
import Velogimg from '../../asset/imgs/velogg.png';
import { LeftArrow, RightArrow } from '../util/Utill';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { SectionHeader2 } from '../../GlobalComponents';

const Back = styled.div`
    width: 100%;
    position: absolute;
    display: flex;

    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;

    @media (max-width: 500px) {
        overflow-x: hidden;
        margin: 0;
        width: 100%;
    }
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
`;

const Section = styled.section`
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background: url();
    background-size: cover; */
`;

const ImgWrapper = styled.div`
    margin-top: -10px;
    min-width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.4) translate(0, -20%);
    }
`;

const A = styled.a``;

const Image = styled.img`
    width: 55px;
    height: 55px;
    margin-left: 5px;
`;
const Footerspan = styled.span`
    margin-bottom: 50px;
    position: absolute;
    bottom: 0;
    color: black;
    @media (max-width: 500px) {
        margin-bottom: -150px;
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 100px 0 450px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
    @media (max-width: 500px) {
        margin-top: 70px;
        margin-left: -200px;
        width: 50%;
        gap: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const ContactInfo = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 30px;
    }
`;

const Box = styled.div`
    position: relative;
    padding: 20px 0;
    display: flex;
    margin-top: 10px;
`;

const Icon = styled.div`
    margin-top: -10px;
    min-width: 60px;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;

    @media (max-width: 500px) {
        font-size: 12px;
    }
`;
const Text = styled.div`
    display: flex;
    margin-left: 20px;
    margin-top: -5px;
    font-size: 16px;
    flex-direction: column;
    font-weight: 300;
    @media (max-width: 500px) {
        font-size: 14px;
    }
    h3 {
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 500;
        color: #00bcd4;
        @media (max-width: 500px) {
            font-size: 12px;
        }
    }
    p {
        color: #000;
        margin-top: -5px;
        @media (max-width: 500px) {
            width: 100%;
            white-space: nowrap;
        }
    }
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.textColor};
    width: 50%;
    padding: 40px;
    background: #fff;
    border: 1px solid;
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        width: 25vh;
        height: 35vh;
        font-size: 12px;
    }
    h2 {
        font-size: 30px;
        color: #333;
        font-weight: 500;
        @media (max-width: 500px) {
            font-size: 10px;
        }
    }
`;
const InputBox = styled.div`
    position: relative;
    width: 100%;
    margin-top: 10px;
    input,
    textarea {
        width: 100%;
        padding: 5px 0;
        font-size: 16px;
        margin: 10px 0;
        border: none;
        border-bottom: 2px solid #333;
        outline: none;
        resize: none;
        @media (max-width: 500px) {
            font-size: 12px;
        }
    }
    span {
        position: absolute;
        left: 0;
        padding: 5px 0;
        font-size: 16px;
        margin: 10px 0;
        pointer-events: none;
        transition: 0.5s;
        color: #666;
        @media (max-width: 500px) {
            font-size: 12px;
        }
    }
    input:focus ~ span,
    input:valid ~ span,
    textarea:focus ~ span,
    textarea:valid ~ span {
        color: #e91e63;
        font-size: 12px;
        transform: translateY(-20px);
    }

    input[type='submit'] {
        width: 100px;
        background: #00bcd4;
        color: #fff;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
        @media (max-width: 500px) {
            font-size: 12px;
        }
    }
`;

const Footer = () => {
    return (
        <Back>
            <Inner>
                <SectionHeader2 text="Contacts" />
                <Section>
                    <Container>
                        <ContactInfo>
                            <Box>
                                <ImgWrapper>
                                    <A href="https://github.com/dongridongil" target="_blank">
                                        <Image src={Gitimg} />
                                    </A>
                                </ImgWrapper>
                                <Text>
                                    <h3>Github </h3>
                                    <p>Github 주소 입니다.</p>
                                </Text>
                            </Box>
                            <Box>
                                <ImgWrapper>
                                    <A href="https://velog.io/@ehddlfwkd/posts" target="_blank">
                                        <Image src={Velogimg} />
                                    </A>
                                </ImgWrapper>
                                <Text>
                                    <h3>Velog</h3>
                                    <p> Velog 주소 입니다.</p>
                                </Text>
                            </Box>
                            <Box>
                                <Icon>
                                    <FontAwesomeIcon style={{ color: 'black' }} icon={faPhone} />
                                </Icon>
                                <Text>
                                    <h3>Phone</h3>
                                    <p>010-9734-9171</p>
                                </Text>
                            </Box>
                            <Box>
                                <Icon>
                                    <FontAwesomeIcon style={{ color: 'black' }} icon={faEnvelope} />
                                </Icon>
                                <Text>
                                    <h3>Email</h3>
                                    <p>ehddlfwkd32@naver.com</p>
                                </Text>
                            </Box>
                        </ContactInfo>
                        <ContactForm>
                            <div>
                                <h2>Send Message</h2>
                                <InputBox>
                                    <input type="text" name="" required />
                                    <span>Full Name</span>
                                </InputBox>
                                <InputBox>
                                    <input type="text" name="" required />
                                    <span>Email</span>
                                </InputBox>
                                <InputBox>
                                    <textarea required />
                                    <span>Message</span>
                                </InputBox>
                                <InputBox>
                                    <input type="submit" name="" value="Send"></input>
                                </InputBox>
                            </div>
                        </ContactForm>
                    </Container>
                </Section>
            </Inner>
            <Footerspan> © 2024 Designed by KIM Di. All rights reserved.</Footerspan>
        </Back>
    );
};

export default Footer;
