import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    border-radius:  ${px2vw(4)};
    //margin-bottom: ${px2vw(40)};
    margin-left: auto;
    margin-right: auto;
    background-color: #4A00E033;

    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        height: ${px2vw(75)};
        border-bottom: 3px solid #acacacaa;
        
    }


    .logo img{
        width: ${px2vw(85)};
        
    }

    
    .menu .logo {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0 75px;
        z-index: 999;
        left: 0;        
    }

    //rgba(255,255,255,0.15);

    a { 
    color: #fff;
    width: 14%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size:  ${px2vw(24)};
    font-weight: bold;
    margin-bottom: 0%;
    border-left: 3px solid #acacacaa;
    }

    a:hover{
        color: #fff;
        background-color: #ffffff33;
    }

    .play{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: ${px2vw(20)};
        font-size:  ${px2vw(30)};
        color: #000;
        background-color: #ffcc33;
        border: solid  ${px2vw(2)} #ffcc33;
        border-radius:  ${px2vw(1)};
        height:  ${px2vw(110)};
        width:  ${px2vw(200)};
        z-index: 999;
        right: 0;
        margin-right:  ${px2vw(45)};
        position: absolute;
        
    }

    .play:hover{
        transition-delay: 0.1s;
        color: #ffffffcc;
        background-color: #ffcc33;
    }
`;
