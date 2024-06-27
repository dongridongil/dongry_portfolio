import styled from 'styled-components';

export function SectionHeader({ text }: { text: string }) {
    return <SectionName>{text}</SectionName>;
}

/**
 * 공통 Wrapper
 */
export const GWrapper = styled.section`
    position: relative;
    padding: 6rem 0 2rem;

    & ~ & {
        margin-top: 6rem;
    }

    @media (max-width: 500px) {
        padding: 3rem 0 0;

        & ~ & {
            margin-top: 3rem;
        }
    }
`;

/**
 * 공통 Inner
 */
export const GInner = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const GArea = styled.div`
    width: 100%;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

/**
 * 공통 헤더 이름작성용
 */
const SectionName = styled.div`
    position: relative;
    z-index: 9999;
    margin-top: 5rem;
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
    font-size: 6rem;
    font-weight: 700;
    color: ${(props) => props.theme.textColor};

    @media (max-width: 1200px) {
        font-size: 3.5rem;
        margin-bottom: 4rem;
    }

    @media (max-width: 900px) {
        margin-bottom: 3rem;
        font-size: 3rem;
    }

    @media (max-width: 500px) {
        /* padding-left: 3rem; */
        margin-bottom: 2rem;
        font-size: 2rem;
    }
`;
