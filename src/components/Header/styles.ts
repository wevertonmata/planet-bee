import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    border-radius:  1em;
    margin-left: auto;
    margin-right: auto;
    background-color: #4A00E033;

    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: static;
        flex-wrap: nowrap;
        height: ${px2vw(75)};
        font-size:  ${px2vw(24)};
        border-bottom: 0.15em solid #acacacaa;
        position: static;
        
    }


    img{
        width: ${px2vw(85)};
    }

    .logo-a{
        border: none;
    }

    a { 
    color: #fff;
    width: 14%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0%;
    border-left: 0.15em solid #acacacaa;
    position: static;
    }

    a:hover{
        color: #fff;
        background-color: #ffffff33;
    }

    .play{
        padding-top: 0.75em;
        font-size:  ${px2vw(30)};
        color: #000;
        background-color: #ffcc33;
        border: solid  0.5em #ffcc33;
        border-radius:   0.3em;
        height:  ${px2vw(120)};
        z-index: 999;
        position: static;
    }

    .play:hover{
        transition-delay: 0.12s;
        color: #ffffffcc;
        background-color: #ffcc33;
    }

    @media screen and (max-width: 767px) {
       
    }
`;
