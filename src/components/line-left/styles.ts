import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 55%;
    //height: 300px;
    margin-left: 10%;
    margin-right: 0;
    margin-top:  ${px2vw(40)};
    margin-bottom: ${px2vw(20)};
    padding: ${px2vw(15)};
    padding-bottom: 30px;
    background-color: rgba(0,0,0, 0.15);
    border-radius: ${px2vw(4)};
    display: flex;
    flex-direction: column;
    align-items: center;
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

