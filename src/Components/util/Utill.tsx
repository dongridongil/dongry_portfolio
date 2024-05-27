import styled from 'styled-components';

const LeftArrow = styled.div`
    width: 100px;
    height: 100px;
    transition: 0.5s;
    float: left;
    box-shadow: -2px 2px 0 ${(props) => props.theme.textColor};
    transform: rotate(45deg);
    margin-left: 200px;
    cursor: none;
    &:hover {
        box-shadow: -20px 20px 0 #01fe87;
    }
`;
const RightArrow = styled.div`
    width: 100px;
    height: 100px;
    transition: 0.5s;
    float: left;
    margin-right: 200px;
    box-shadow: -2px 2px 0 ${(props) => props.theme.textColor};
    transform: rotate(225deg);
    cursor: none;
    &:hover {
        box-shadow: -20px 20px 0 #01fe87;
    }
`;

export { LeftArrow, RightArrow };
