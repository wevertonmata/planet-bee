import {createGlobalStyle} from 'styled-components';
import px2vw from "../utils/px2vw";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: ${px2vw(18)};
      --montserrat: 'Montserrat', sans-serif;

      @media (min-width: 768px) {
        font-size: ${px2vw(16)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(1)};
      }
    }


    body{
      font-family: 'Open Sans', sans-serif;
      background: #4b178d;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to bottom, #5803e3 0%,#4b178d 50%,#110025 100%);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to bottom, #5803e3 0%,#4b178d 50%,#110025 100%); //W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`;