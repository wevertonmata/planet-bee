import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    background-color: #1e0042;

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: nowrap;
        height: ${px2vw(90)};
        font-size:  ${px2vw(24)};   
    }
    
    img{
        width: ${px2vw(85)};
    }

    .logo-a{
        border: none;
        justify-self: flex-start;
    }

    a { 
        color: #fff;
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
    }

    a:hover{
        color: #ffcc33;
    }

    .bottons-nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 70%;
    }

    .play{
        font-size:  ${px2vw(30)};
        color: #1e0042;
        background-color: #ffcc33;
        border: solid  0.5em #ffcc33;
        border-radius:   0.3em;
        height:  ${px2vw(65)};
        box-shadow: -5px 2px 4px #000;
        text-shadow: 1.5px 1px  1px #000;
    }

    .play:hover{
        transition-delay: 0.2s;
        color: #000;
        background-color: #ffcc33;
    }

    @media screen and (max-width: 767px) {
       
    }
`;
