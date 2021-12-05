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
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        //margin-bottom: ${px2vw(40)};
        height: ${px2vw(90)};
        border-bottom: 2px solid #fff;
    }


    .logo img{
        width: ${px2vw(100)};
    }

    
    .menu .logo {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        z-index: 999;
        left: 0;
        margin-left:  ${px2vw(80)};;
        position: absolute;
    }

    a { 
    color: #fff;
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size:  ${px2vw(26)};
    font-weight: bold;
    margin-bottom: 0%;
    border-left: 3px solid #fff;
    }

    a:hover{
        color: #fff;
        background-color: #ffffff33;
    }

    .play{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: ${px2vw(30)};
        font-size:  ${px2vw(38)};
        color: #000;
        background-color: #ffcc33;
        border: solid  ${px2vw(2)} #ffcc33;
        border-radius:  ${px2vw(1)};
        height:  ${px2vw(150)};
        width:  ${px2vw(250)};
        z-index: 999;
        right: 0;
        margin-right:  ${px2vw(40)};
        position: absolute;
        
    }

    .play:hover{
        color: #fff;
        background-color: #ffcc33;
    }
`;
