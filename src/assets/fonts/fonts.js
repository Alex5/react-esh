import { createGlobalStyle } from 'styled-components';

import TTNormsMedium from './TTNorms-Medium.woff';
// import NameOfYourFontWoff2 from './nameOfYourFont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'TT Norms Medium';
        src: local('TT Norms Medium'), local('TTNormsMedium'),
        url(${TTNormsMedium}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;