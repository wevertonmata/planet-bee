import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${px2vw(20)};
    margin-top: ${px2vw(20)};
    width: 90%;

    .logoFooter img{
        width: ${px2vw(60)};
        margin-top: ${px2vw(10)};
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
        width: ${px2vw(40)};
        height: ${px2vw(40)};
        margin-left:  ${px2vw(25)};
    }
    .Twitter svg{
        width: ${px2vw(40)};
        height: ${px2vw(40)};
    }
`;
