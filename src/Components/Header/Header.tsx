import styled from 'styled-components';
import kdi from '../../asset/imgs/kdi3.png';
import { Link } from 'react-router-dom';
const Image = styled.img`
    /* display: block; */
    width: 200px;
    height: 200px;
    object-fit: cover;
    position: absolute;
    left: 50px;
    top: -30px;
    @media (max-width: 1000px) {
        left: 50px;
        top: 0;
        width: 150px;
        height: 150px;
    }
    @media (max-width: 500px) {
        left: 50px;
        top: 0;
        width: 100px;
        height: 100px;
    }
`;

const Header = () => {
    return (
        <Link to="/">
            <Image src={kdi} />
        </Link>
    );
};

export default Header;
