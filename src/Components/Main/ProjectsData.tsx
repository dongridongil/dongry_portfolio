import DongflixBackimg from '../../asset/imgs/netflixback.png';
import Dongfliximg from '../../asset/imgs/dongflix.png';
import Movieimg from '../../asset/imgs/movieinfo.png';
import MovieBackimg from '../../asset/imgs/movieback.png';
import Shopimg from '../../asset/imgs/Shop.png';
import ShopBackimg from '../../asset/imgs/Shopback.png';
import Vuestaimg from '../../asset/imgs/vuestar.png';
import VuestaBackimg from '../../asset/imgs/vueback.png';
import Photosplashimg from '../../asset/imgs/photosplash.png';
import PhotosplashBackimg from '../../asset/imgs/photosplashback.png';
import NextMovieimg from '../../asset/imgs/nextfront.png';
import NextMovieBackimg from '../../asset/imgs/nextback.png';
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
        imageUrl: NextMovieimg,
        backimage: NextMovieBackimg,
        name: 'NEXT MOVIE',
        title: 'NEXT MOVIE ',
        skill: 'Next.Js ,Type Script ,Vercel',
        summary: `최신 영화&시리즈 를 알려주는 사이트 themoviedb 의 api 활용 하여 
        개인 프로젝트인 최신영화 및 티비 시리즈 정보들을 
        한눈에 볼수있는 사이트를 만들었습니다. 서버 사이드와 클라이언트 사이드를 
          구분하는 작업을 통하여 서버 사이드 렌더링인 NEXT.JS와 vercel 을 활용한 배포도  
          배워볼수있는 시간이였습니다.
          `,
        url: 'https://nextjs-movies-blond-five.vercel.app/',
    },
    {
        id: 2,
        imageUrl: Photosplashimg,
        backimage: PhotosplashBackimg,
        name: 'Photo Splash',
        title: 'Photo Splash ',
        skill: 'React ,Type Script, Vite',
        summary: `Unsplash 이미지 사이트를 참고 및 api 활용 하여 개인 프로젝트인
          이미지 검색&저장 사이트  Photo Splash 를 만들어 보았습니다.
         새로운 기술 습득을 위해 VITE , SCSS , TOAST 를 사용하였고
        반응형 디자인을 구현하여 다양한 디바이스 환경에 맞는  ui를 구성했습니다. `,
        url: 'https://dongridongil.github.io/reactalbum/',
    },

    {
        id: 3,
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
        id: 4,
        imageUrl: Shopimg,
        backimage: ShopBackimg,
        name: 'Shopping Mall',
        title: 'Shopping Mall',
        skill: 'React  , Java Script',
        summary: `장바구니, 최근본상품 목록 등등 필요한 기능들을  만들어본 
        쇼핑몰 토이프로젝트입니다
                    `,
        url: 'https://dongridongil.github.io/shop/',
    },

    {
        id: 6,
        imageUrl: Movieimg,
        backimage: MovieBackimg,
        name: 'Movie Information Site',
        title: 'Movie Information',
        skill: 'React  , Type Script',
        summary: ' 다양한 해외 영화들을 확인할수 있고 디테일 정보도 알아갈수 있는 앱입니다.  ',
        url: 'https://dongridongil.github.io/moviepracs/',
    },

    {
        id: 5,
        imageUrl: Vuestaimg,
        backimage: VuestaBackimg,
        name: 'VueStaGram',
        title: 'VueStaGram',
        skill: 'Vue , Java Script',
        summary: `Vue.js 로 만든 인스타그램 클론입니다 . Vue에서 필수적으로 알아야할
         기능들 (props, mitt , vuex ,ajax요청, composition API) 사용법에 대해 
        많이 공부할수있는 시간이였습니다.
                    `,
        url: 'https://dongridongil.github.io/vuesta/',
    },
];
export default ProjectsData;
