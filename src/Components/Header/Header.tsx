import styled from 'styled-components';
import kdi from '../../asset/imgs/kdi3.png';
const Image = styled.img`
    /* display: block; */
    width: 200px;
    height: 200px;
    object-fit: cover;
    position: absolute;
    left: 50px;
    top: -30px;
`;

const Header = () => {
    return <Image src={kdi} />;
};

export default Header;
