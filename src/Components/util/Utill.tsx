import styled from 'styled-components';

const LeftArrow = styled.div`
    width: 50px;
    height: 50px;
    transition: 0.5s;
    float: left;
    box-shadow: -2px 2px 0 ${(props) => props.theme.textColor};
    transform: rotate(45deg);
    margin-left: 200px;
    cursor: none;
    &:hover {
        box-shadow: -10px 10px 0 #01fe87;
    }
    @media (max-width: 1200px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 900px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 500px) {
        margin-top: 100px;
        margin-left: 130px;
        width: 25px;
        height: 25px;
    }
`;
const RightArrow = styled.div`
    width: 50px;
    height: 50px;
    transition: 0.5s;
    float: left;
    margin-right: 200px;
    box-shadow: -2px 2px 0 ${(props) => props.theme.textColor};
    transform: rotate(225deg);
    cursor: none;
    &:hover {
        box-shadow: -10px 10px 0 #01fe87;
    }
    @media (max-width: 1200px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 900px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 500px) {
        margin-top: 100px;
        margin-right: 130px;
        width: 25px;
        height: 25px;
    }
`;

export { LeftArrow, RightArrow };
