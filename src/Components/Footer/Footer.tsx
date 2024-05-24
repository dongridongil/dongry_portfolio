import styled from 'styled-components';
import Gitimg from '../../asset/imgs/git-hub.png';
import Velogimg from '../../asset/imgs/velogg.png';

const FooterContainer = styled.footer`
    background-color: #383f43;
    color: white;
    text-align: center;
    padding: 100px 0;
    font-size: 20px;
    flex-direction: column;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImgWrapper = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    margin: 0 15px;
    position: absolute;
    margin-bottom: 30px;
`;

const Link = styled.a``;

const Image = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    margin-right: 10px;
`;
const Footerspan = styled.span`
    margin-bottom: 20px;
    position: absolute;
    bottom: 0;
`;
const Footer = () => {
    return (
        <FooterContainer>
            <ImgWrapper>
                <Link href="https://github.com/dongridongil" target="_blank">
                    <Image src={Gitimg} />
                </Link>
                <Link href="https://velog.io/@ehddlfwkd/posts" target="_blank">
                    <Image src={Velogimg} />
                </Link>
            </ImgWrapper>
            <Footerspan> © 2024 Designed by KIM Di. All rights reserved.</Footerspan>
        </FooterContainer>
    );
};

export default Footer;
