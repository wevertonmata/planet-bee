import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 55%;
    //height: 300px;
    margin-left: 0;
    margin-right: 10%;
    margin-top: ${px2vw(20)};
    margin-bottom: ${px2vw(20)};
    padding:  ${px2vw(20)};
    padding-bottom:  ${px2vw(30)};
    background-color: rgba(0,0,0, 0.15);
    border-radius:  ${px2vw(4)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    box-shadow: rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px;    

    h1 {
        color: #ffcc33;
        margin-top: ${px2vw(20)};
    }

    p{
        font-weight: 300;
        margin-top: ${px2vw(20)};
        padding-left: ${px2vw(20)};
        padding-right:${px2vw(20)};
        text-align: justify;  
    }
`;

