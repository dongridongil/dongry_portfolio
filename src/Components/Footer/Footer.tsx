import styled from 'styled-components';
import Gitimg from '../../asset/imgs/git-hub.png';
import Velogimg from '../../asset/imgs/velogg.png';
import { LeftArrow, RightArrow } from '../util/Utill';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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
    margin-bottom: 20px;
    position: absolute;
    bottom: 0;
    color: white;
`;

const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Section = styled.section`
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 50px 100px;
    /* background: url();
    background-size: cover; */
`;
const Content = styled.div`
    max-width: 800px;
    position: absolute;
    top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: ${(props) => props.theme.textColor};

    h2 {
        font-size: 100px;
        font-weight: 700;
    }
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 200px;
`;
const ContactInfo = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
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
`;
const Text = styled.text`
    display: flex;
    margin-left: 20px;
    margin-top: -5px;
    font-size: 16px;
    flex-direction: column;
    font-weight: 300;
    h3 {
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 500;
        color: #00bcd4;
    }
    p {
        color: ${(props) => props.theme.textColor};
        margin-top: -5px;
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
    h2 {
        font-size: 30px;
        color: #333;
        font-weight: 500;
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
    }
    input:focus ~ span,
    input:valid ~ span,
    textarea:focus ~ span,
    textarea:valid ~ span {
        color: #e91e63;
        font-size: 12px;
        transform: tranlate(-20px);
    }

    input[type='submit'] {
        width: 100px;
        background: #00bcd4;
        color: #fff;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
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

const Footer = () => {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageMove} transition={pageTransition}>
            <Back>
                <Link to="/skills">
                    {' '}
                    <LeftArrow />
                </Link>
                <Content>
                    <h2>Contact Me</h2>
                </Content>
                <Inner>
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
                                <form>
                                    <h2>Send Message</h2>
                                    <InputBox>
                                        <input type="text" name="" required></input>
                                        <span>Full Name</span>
                                    </InputBox>
                                    <InputBox>
                                        <input type="text" name="" required></input>
                                        <span>Email</span>
                                    </InputBox>
                                    <InputBox>
                                        <textarea required></textarea>
                                        <span>Message</span>
                                    </InputBox>
                                    <InputBox>
                                        <input type="submit" name="" value="Send"></input>
                                    </InputBox>
                                </form>
                            </ContactForm>
                        </Container>
                    </Section>
                </Inner>
                <Link to="/">
                    {' '}
                    <RightArrow />
                </Link>

                <Footerspan> © 2024 Designed by KIM Di. All rights reserved.</Footerspan>
            </Back>
        </motion.div>
    );
};

export default Footer;
