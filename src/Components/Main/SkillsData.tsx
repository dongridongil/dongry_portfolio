import ReactSvg from '../../asset/imgs/react.svg';
import GitSvg from '../../asset/imgs/git.svg';
import Html5Svg from '../../asset/imgs/html5.svg';
import DbSvg from '../../asset/imgs/db.svg';
import NodeSvg from '../../asset/imgs/node.svg';
import JavascriptSvg from '../../asset/imgs/javascript.svg';
import TypeScriptSvg from '../../asset/imgs/typescript.svg';
import Css3Svg from '../../asset/imgs/css3.svg';
import NginxSvg from '../../asset/imgs/nginx.svg';
import CloudFlareSvg from '../../asset/imgs/cloudflare.svg';
import LaravelSvg from '../../asset/imgs/laravel.svg';

const SkillsData = [
    {
        id: 1,
        name: 'CSS3',
        svg: Css3Svg,
        comment:
            '페이지에 표현 될 마크업을 꾸미고 애니메이트 등을 통해 인터렉티브한 페이지를 표현하거나 작성 할 수 있습니다',
    },
    { id: 2, name: 'HTML5', svg: Html5Svg, comment: '마크업을 통해 웹 페이지를 작성할 수 있습니다.' },

    {
        id: 3,
        name: 'React',
        svg: ReactSvg,
        comment:
            '프론트엔드 개발자로 성장하기 위해 노마드코더 온라인 강의, 리액트 책으로 학습하고 기본적인 state의 개념과 유용한 라이브러리들인 styled, framer-motion, react-hook-form, router-dom, recoil, react-query 등을 실제로 적용해보는 프로젝트를 작성해보았습니다.',
    },

    {
        id: 4,
        name: 'RDB',
        svg: DbSvg,
        comment:
            'MongoDB, Mysql, MariaDb, Postgresql ,GraphQL 등 다양한 rdb를 활용하여 쿼리를 작성하고 crud작업을 진행하였습니다.',
    },
    {
        id: 5,
        name: 'JavaScript',
        svg: JavascriptSvg,
        comment:
            '개발 입문을 자바스크립트로 하였으며  바닐라 스크립트를 통한 DOM을 제어하거나 이벤트 처리를 하고 동적인 동작처리 등을 할 수 있습니다.',
    },
    {
        id: 6,
        name: 'TypeScript',
        svg: TypeScriptSvg,
        comment:
            '자바스크립트의 엄격한 문법을 사용하게 해주는 타입스크립트로 최근 리액트를 학습하면서 추가적으로 학습하게 되었습니다.  타입스크립트를 사용하는 버릇을 들이기 위해 최근 작업물들은 타입스크립트 버전으로 작성 중에 있습니다',
    },
    {
        id: 7,
        name: 'Git',
        svg: GitSvg,
        comment:
            '프로젝트 형상관리 및 팀원과의 협업을 위해 branch를 나누고 프로젝트 merge 작업을 진행하거나, 과거 버전으로 revert 작업등을 수행해보았습니다. 전 회사에서는 GitLab 을 사용하였고 최근에는 Github를 통해  소소한 개인 프로젝트 등도 commit처리 하는 습관을 들이도록 노력 중입니다.',
    },
    {
        id: 8,
        name: 'Node',
        svg: NodeSvg,
        comment:
            '개발 첫시작을 자바스크립트로 하였으며 백엔드시작을 Node.Js로 하였습니다  기본적인 웹서버 프레임워크 부터 DB 연결 ,Rest-api기능, 서버의 보안 처리 경험하였고 프로젝트가 끝나고 실서버에 배포하는 작업을 진행해본 경험이 있습니다. ',
    },
    {
        id: 9,
        name: 'NginX',
        svg: NginxSvg,
        comment:
            ' 회사에서 백엔드 근무시 웹서버를 apache 와 Nginx 둘다 썼으나 보다 적은자원으로 효율적으로 운영이 가능한 Nginx를 주로 사용해왔습니다.  ',
    },
    {
        id: 10,
        name: 'CloudFlare',
        svg: CloudFlareSvg,
        comment:
            ' CloudFlare 의 웹 방화벽 기능을 사용하여 악성 트래픽 을 필터링하고 악성 봇을 보호하는 기능을 사용해보았습니다. 쉽게 SSL 인증서를 설정할수있어서 웹사이트 보안을 강화 하였습니다.  ',
    },
    {
        id: 11,
        name: '',
        svg: LaravelSvg,
        comment:
            ' 회사 프로젝트중 php 를 사용하였으며 php 프레임워크인 라라벨을 사용하였습니다. 직관적인 문법을 제공하며 php 프레임워크지만 프론트에서는 자바스크립트를 사용할수있습니다 그리고 라우팅과 mvc 아키텍처에 대해 많이 알게되는 시간이였습니다.   ',
    },
];

export default SkillsData;
