import DongflixBackimg from '../../asset/imgs/netflixback.png';
import Dongfliximg from '../../asset/imgs/dongflix.png';
import Momentimg from '../../asset/imgs/momentemapp.png';
import MomentBackimg from '../../asset/imgs/momentback.png';
import Movieimg from '../../asset/imgs/movieapp.png';
import MovieBackimg from '../../asset/imgs/movieback.png';
import Coinimg from '../../asset/imgs/coinapp.png';
import CoinBackimg from '../../asset/imgs/coinback.png';

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
        imageUrl: Dongfliximg,
        backimage: DongflixBackimg,
        name: 'NETFLIX CLONE',
        title: 'Dongflix ',
        skill: 'React JS',
        summary: `노마드 코더의 React JS 마스터클래스 졸업작품 인 넷플릭스 클론입니다. 
        그동안 배워온 React 기술들을 총집합하여 사이트를 만들어보았습니다.   `,
        url: 'https://dongridongil.github.io/dongfilx_clone/',
    },
    {
        id: 2,
        imageUrl: Momentimg,
        backimage: MomentBackimg,
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
        imageUrl: Movieimg,
        backimage: MovieBackimg,
        name: 'Movie Information Site',
        title: '다양한 영화정보 소개사이트',
        skill: 'React JS',
        summary: ' 다양한 해외 영화들을 확인할수 있고 디테일 정보도 알아갈수 있는 앱입니다.  ',
        url: 'https://dongridongil.github.io/moviepracs/',
    },
    {
        id: 4,
        imageUrl: Coinimg,
        backimage: CoinBackimg,
        name: 'Coin Information Site',
        title: '코인정보 사이트',
        skill: 'React JS',
        summary: ` 다양한 코인들의 정보와 순위를 제공하며 한눈에 확인할수있는 차트와
             최대 1년전부터 30분전까지 코인의 상승,하락장을 체크 할수있는 사이트입니다.  `,
        url: 'https://dongridongil.github.io/coin_app/',
    },
];
export default ProjectsData;
