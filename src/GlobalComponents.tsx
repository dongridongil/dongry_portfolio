import styled from 'styled-components';

export function SectionHeader({ text }: { text: string }) {
    return <SectionName>{text}</SectionName>;
}

export function SectionHeader2({ text }: { text: string }) {
    return <SectionName2>{text}</SectionName2>;
}
/**
 * 공통 Wrapper
 */
export const GWrapper = styled.section`
    width: 100%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

/**
 * 공통 헤더 이름작성용
 */
const SectionName = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    padding: 100px 0 50px 0;
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

const SectionName2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 3rem;
    font-weight: 700;
    color: #000;
    padding: 200px 0 80px 0;
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
