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
        color: #ffde00;
    }

    .bottons-nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        padding-left: ${px2vw(50)};
        padding-right: ${px2vw(50)};
        width: 70%;
    }

    .bottons-nav a:hover{
        font-size:  ${px2vw(26)};   
        transition-delay: 0.2s;
    }

    .play{
        font-size:  ${px2vw(30)};
        color: #1e0042;
        background-color: #ffde00;
        border: solid  0.5em #ffde00;;
        border-radius:   0.3em;
        height:  ${px2vw(65)};
        //box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    }

    .play:hover{
        transition-delay: 0.2s;
        color: #fff;
        background-color: #ffde00;
        font-size:  ${px2vw(30)};   
        transition-delay: 0.2s;
        text-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 2px 10px rgba(150, 150, 150, 0.5); 
    }

    @media screen and (max-width: 767px) {

    }
`;
