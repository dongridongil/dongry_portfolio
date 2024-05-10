import DongflixBackimg from '../../asset/imgs/netflixback.png';
import Dongfliximg from '../../asset/imgs/dongflix.png';
import Momentimg from '../../asset/imgs/momentfront.png';
import MomentBackimg from '../../asset/imgs/backmoment.png';
import Movieimg from '../../asset/imgs/movieapp.png';
import MovieBackimg from '../../asset/imgs/movieback.png';
import Coinimg from '../../asset/imgs/coinapp.png';
import CoinBackimg from '../../asset/imgs/coinback.png';
import Shopimg from '../../asset/imgs/Shop.png';
import ShopBackimg from '../../asset/imgs/Shopback.png';
import Vuestaimg from '../../asset/imgs/Vuesta.png';
import VuestaBackimg from '../../asset/imgs/vuestarback.png';

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
        skill: 'React  , Type Script',
        summary: `노마드 코더의 React JS 마스터클래스 졸업작품 인 넷플릭스 클론입니다. 
        그동안 배워온 React 기술들을 총집합하여 사이트를 만들어보았습니다.   `,
        url: 'https://dongridongil.github.io/dongfilx_clone/',
    },
    {
        id: 5,
        imageUrl: Momentimg,
        backimage: MomentBackimg,
        name: 'MOMENTUM',
        title: '일정관리 앱',
        skill: 'Vanilla JS',
        summary: ` Chrome의 일정관리 앱인 momentum을 바닐라JS 를 통해 만들어보았습니다 . 
            날씨와 온도정보를 제공하며 localStorage 을 통해 로컬환경에서 
            일정을 저장하여 관리 할수있는 앱입니다. `,
        url: 'https://dongridongil.github.io/momentem/',
    },
    {
        id: 3,
        imageUrl: Movieimg,
        backimage: MovieBackimg,
        name: 'Movie Information Site',
        title: '다양한 영화정보 소개사이트',
        skill: 'React  , Type Script',
        summary: ' 다양한 해외 영화들을 확인할수 있고 디테일 정보도 알아갈수 있는 앱입니다.  ',
        url: 'https://dongridongil.github.io/moviepracs/',
    },
    {
        id: 4,
        imageUrl: Coinimg,
        backimage: CoinBackimg,
        name: 'Coin Information Site ',
        title: '코인정보 사이트',
        skill: 'React  , Type Script',
        summary: ` 다양한 코인들의 정보와 순위를 제공하며 한눈에 확인할수있는 차트와
             최대 1년전부터 30분전까지 코인의 상승,하락장을 체크 할수있는 사이트입니다.  `,
        url: 'https://dongridongil.github.io/coin_app/',
    },
    {
        id: 2,
        imageUrl: Shopimg,
        backimage: ShopBackimg,
        name: 'Shopping Mall',
        title: '쇼핑몰',
        skill: 'React  , Java Script',
        summary: `장바구니, 최근본상품 목록 등등 필요한 기능들을  만들어본 
        쇼핑몰 토이프로젝트입니다
                    `,
        url: 'https://dongridongil.github.io/shop/',
    },
    {
        id: 6,
        imageUrl: Vuestaimg,
        backimage: VuestaBackimg,
        name: 'VueStaGram',
        title: '인스타그램 클론입니다',
        skill: 'Vue , Java Script',
        summary: `Vue.js 로 만든 인스타그램 클론입니다 . Vue에서 필수적으로 알아야할
         기능들 (props, mitt , vuex ,ajax요청, composition API) 사용법에 대해 
        많이 공부할수있는 시간이였습니다.
                    `,
        url: 'https://dongridongil.github.io/',
    },
];
export default ProjectsData;
