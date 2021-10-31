import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    h1{
        align-items: center;
        padding-bottom: ${px2vw(10)};
        color: #ffcc33;
    }

    p{
        text-align:justify;
        font-size: ${px2vw(14)};
        line-height: ${px2vw(26)};
        text-align: justify;
        color: #fff;
        padding-bottom: ${px2vw(10)};
    }
    
    .about{
        flex: 1;
        margin-left:${px2vw(50)};
        justify-content: center;
    }

    .art{
        flex: 1;
        justify-content: center;
    }

    .art img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: ${px2vw(300)};
    }
`;
