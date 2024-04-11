import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #358aa4;
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
    display: flex; /* 이미지를 가로로 정렬하기 위해 flex를 사용합니다. */
    justify-content: center;
    margin: 0 15px;

    position: absolute;
    margin-bottom: 30px; /* 이미지와 텍스트 사이의 간격을 설정할 수 있습니다. */
`;

const Link = styled.a``;

const Image = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    margin-right: 10px; /* 이미지 사이의 간격을 설정합니다. */
`;
const Footerspan = styled.span`
    margin-bottom: 20px; /* Footer와의 간격 조정 */
    position: absolute; /* FooterContainer를 기준으로 위치를 조정하기 위해 절대적으로 설정합니다. */
    bottom: 0; /* FooterContainer의 하단에 위치하도록 설정합니다. */
`;
const Footer = () => {
    return (
        <FooterContainer>
            <ImgWrapper>
                <Link href="https://github.com/dongridongil" target="_blank">
                    <Image src="/../asset/imgs/footer/git-hub.png"></Image>
                </Link>
                <Link href="https://velog.io/@ehddlfwkd/posts" target="_blank">
                    <Image src="/../asset/imgs/footer/velogg.png" />
                </Link>
            </ImgWrapper>
            <Footerspan> © 2024 Designed by KIM Di. All rights reserved.</Footerspan>
        </FooterContainer>
    );
};

export default Footer;
