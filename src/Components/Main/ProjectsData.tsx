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
    id: string;
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
        id: '01',
        imageUrl: NextMovieimg,
        backimage: NextMovieBackimg,
        name: 'Next Movie',
        title: 'NEXT MOVIE ',
        skill: 'Next.Js ,Type Script ,Vercel',
        summary: `TheMoviedDb 사이트의  api 활용 하여 최신영화 및 티비 시리즈 정보들을 
        한눈에 볼수있는 사이트 를 만들어 보았습니다.
          `,
        url: 'https://nextjs-movies-blond-five.vercel.app/',
    },
    {
        id: '02',
        imageUrl: Photosplashimg,
        backimage: PhotosplashBackimg,
        name: 'Photo Splash',
        title: 'Photo Splash ',
        skill: 'React ,Type Script, Vite',
        summary: `Unsplash 사이트를 참고 및 api 활용 하여 개인 프로젝트인
          이미지 검색&저장 사이트  Photo Splash 를 만들어 보았습니다.`,
        url: 'https://dongridongil.github.io/reactalbum/',
    },

    {
        id: '03',
        imageUrl: Dongfliximg,
        backimage: DongflixBackimg,
        name: 'NETFLIX CLONE',
        title: 'Dongflix ',
        skill: 'React , Type Script, Recoil, Framer-motion',
        summary: `노마드 코더의 React JS 마스터클래스 졸업작품 인 넷플릭스 클론입니다.    `,
        url: 'https://dongridongil.github.io/dongfilx_clone/',
    },
    {
        id: '04',
        imageUrl: Vuestaimg,
        backimage: VuestaBackimg,
        name: 'VueStaGram',
        title: 'VueStaGram',
        skill: 'Vue , Java Script',
        summary: `코딩 애플 Vue.js 강의 를 듣고 제작한 인스타그램 클론입니다.`,
        url: 'https://dongridongil.github.io/vuesta/',
    },
];
export default ProjectsData;
