import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${px2vw(20)};
    width: 90%;

    .logoFooter img{
        width: ${px2vw(75)};
    }

    .social{
        display: flex;
        flex-direction: row;
        justify-content: end;
    }

    a{
        text-decoration: none;
        color: white;
    }

    .Discord svg{
        width: ${px2vw(50)};
        height: ${px2vw(50)};
        margin-left:  ${px2vw(25)};
    }
    .Twitter svg{
        width: ${px2vw(50)};
        height: ${px2vw(50)};
    }

    @media screen and (max-width: 767px) {
        
        .logoFooter img{
            width: ${px2vw(100)};
        }

        .Discord svg{
        width: ${px2vw(60)};
        height: ${px2vw(60)};
        margin-left:  ${px2vw(25)};
        }

        .Twitter svg{
            width: ${px2vw(60)};
            height: ${px2vw(60)};
        }
    }


`;
