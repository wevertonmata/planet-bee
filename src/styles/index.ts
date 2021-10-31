import styled from 'styled-components';

import px2vw from "../utils/px2vw";



export const Main = styled.main`
    height: ${px2vw(100)};
    margin-top:  ${px2vw(20)};
`;

export const Box = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${px2vw(20)};
    background-color: rgba(0,0,0, 0.15);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    box-shadow: rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px;    

    h1 {
        color: #ffcc33;
    }

    p{
        font-weight: 500;
    }
`;

export const Inverse = styled.main`
    display: flex;
    flex-direction: row-reverse;
`;

export const Footer = styled.main`
    display: flex;
    height:${px2vw(500)};
    margin-top: ${px2vw(40)};
`;






