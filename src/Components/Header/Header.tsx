import styled from 'styled-components';
import top_logo from '../../asset/imgs/logo_white2.png';
import { Link } from 'react-router-dom';
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    position: fixed;
    left: 50px;
    top: -30px;

    /* 반응형 */
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
            <Image src={top_logo} />
        </Link>
    );
};

export default Header;
