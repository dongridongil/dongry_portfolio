import styled from 'styled-components';
import SkillsData from './SkillsData';
import { GArea, GInner, GWrapper, SectionHeader } from '../../GlobalComponents';

const TechStackIcon = styled.div`
    display: flex;
    width: 5.2rem;
    height: 5.2rem;
    img {
        display: block;
        height: 100%;
    }
    p {
        margin-left: 1.5rem;
        position: relative;
        top: 1.2rem;
        font-size: 2.2rem;
    }
`;
const TechStackBox = styled.li`
    font-weight: 600;
    padding: 2rem 1rem 1rem 2rem;
`;

const Comment = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
`;
const Contents = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 200px;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 0;
`;

const Skills = () => {
    const TechStack = SkillsData.map((tech) => ({
        id: tech.id,
        name: tech.name,
        svg: tech.svg,
        comment: tech.comment,
    }));
    return (
        <section id="skill">
            <GWrapper>
                <GInner>
                    <SectionHeader text=" SKILL" />

                    <GArea>
                        <Contents>
                            {TechStack.map((tech) => (
                                <TechStackBox key={tech.id}>
                                    <TechStackIcon>
                                        <img src={tech.svg} />
                                        <p>{tech.name}</p>
                                    </TechStackIcon>
                                    <FlexColumn>
                                        <Comment>{tech.comment}</Comment>
                                    </FlexColumn>
                                </TechStackBox>
                            ))}
                        </Contents>
                    </GArea>
                </GInner>
            </GWrapper>
        </section>
    );
};

export default Skills;
