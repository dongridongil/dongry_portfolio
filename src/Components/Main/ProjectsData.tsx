export interface Project {
    id: number;
    imageUrl: string;
    backimage: string;
    summary: string;
    url: string;
    name: string;
    title: string;
    skill: string;
}

const ProjectsData: Project[] = [
    {
        id: 1,
        imageUrl: '/../asset/imgs/dongflix.png',
        backimage: '/../asset/imgs/netflixback.png',
        name: 'NETFLIX CLONE',
        title: 'Dongflix ',
        skill: 'React JS',
        summary: `노마드 코더의 React JS 마스터클래스 졸업작품 인 넷플릭스 클론입니다. 
        그동안 배워온 React 기술들을 총집합하여 사이트를 만들어보았습니다.   `,
        url: 'https://dongridongil.github.io/dongfilx_clone/',
    },
    {
        id: 2,
        imageUrl: '/../asset/imgs/momentemapp.png',
        backimage: '/../asset/imgs/momentback.png',
        name: 'MOMENTUM',
        title: '일정관리 앱',
        skill: 'React JS',
        summary: ` Chrome의 일정관리 앱인 momentum을 React 을 통해 만들어보았습니다 . 
            날씨와 온도정보를 제공하며 localStorage 을 통해 로컬환경에서 
            일정을 저장하여 관리 할수있는 앱입니다. `,
        url: 'https://dongridongil.github.io/test.github.io/',
    },
    {
        id: 3,
        imageUrl: '/../asset/imgs/movieapp.png',
        backimage: '/../asset/imgs/movieback.png',
        name: 'Movie Information Site',
        title: '다양한 영화정보 소개사이트',
        skill: 'React JS',
        summary: ' 다양한 해외 영화들을 확인할수 있고 디테일 정보도 알아갈수 있는 앱입니다.  ',
        url: 'https://dongridongil.github.io/moviepracs/',
    },
    {
        id: 4,
        imageUrl: '/../asset/imgs/coinapp.png',
        backimage: '/../asset/imgs/coinback.png',
        name: 'Coin Information Site',
        title: '코인정보 사이트',
        skill: 'React JS',
        summary: ` 다양한 코인들의 정보와 순위를 제공하며 한눈에 확인할수있는 차트와
             최대 1년전부터 30분전까지 코인의 상승,하락장을 체크 할수있는 사이트입니다.  `,
        url: 'https://dongridongil.github.io/coin_app/',
    },
];
export default ProjectsData;
