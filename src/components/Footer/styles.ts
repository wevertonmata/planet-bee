import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: ${px2vw(40)};
    margin-left: auto;
    margin-right: auto;
    

    hr{
        border: 1px solid rgba(0,0,0, 0.25);
    }

    p{
        text-align:justify;
        font-size: ${px2vw(16)};
        line-height: ${px2vw(26)};
        text-align: justify;
        color: #fff;
        padding-bottom: ${px2vw(10)};
    }

    h1{
        align-items: center;
        margin-top: ${px2vw(20)};
        margin-left: auto;
        margin-right: auto;
        color: #ffcc33;
    }

    .social{
        margin-top: ${px2vw(20)};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;

    }

    a{
        margin-top: ${px2vw(20)};
        text-decoration: none;
        color: white;
        border: none;
        margin: 0px ${px2vw(10)}; 
        border-radius: ${px2vw(4)};
    }

    span{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: stretch;
        width: ${px2vw(120)};;
    }

    .Discord svg{
        width: ${px2vw(30)};
        height: ${px2vw(30)};
        margin-left: ${px2vw(10)};
    }
    .Twitter svg{
        width: ${px2vw(30)};
        height: ${px2vw(30)};
    }

    footer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: ${px2vw(20)};
        height: ${px2vw(60)};
        //background: rgba(0,0,0, 0.15);
        border-radius: ${px2vw(4)};
        color: #fff;
        //box-shadow: rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px; 
    }
    
`;
