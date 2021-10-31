import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:  ${px2vw(40)};
    margin-left: auto;
    margin-right: auto;

    img{
        height: 85%;
        width: 85%;
    }

    .details{
        display: flex;
        padding:  ${px2vw(25)};
        flex-direction: column;
        align-items: center;
        border-radius:  ${px2vw(20)};
        background-color: rgba(0,0,0, 0.20);
        max-height:  ${px2vw(350)};
        margin-right: ${px2vw(50)};
        width: 40%;
        box-shadow:rgba(0,0,0, 0.20) 1.95px 1.95px 2.6px; 
    }

    .art{
      margin-left: ${px2vw(50)};
    }

    p{
        text-align:justify;
        font-size:  ${px2vw(16)};
        line-height:  ${px2vw(26)};
        text-align: justify;
        color: #fff;
        padding-bottom:  ${px2vw(10)};
    }

    h1{
        align-items: center;
        padding-bottom:  ${px2vw(10)};
        color: #ffcc33;
    }

    li{
        color: #fff;
        margin-bottom:  ${px2vw(20)};
        list-style-type: none;
    }
    
`;
