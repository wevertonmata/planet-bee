import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;


    .bg {
        width: 100%;
    }

    .bg img{
        width: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .logo img{
        width: ${px2vw(120)};
        margin-top:  ${px2vw(-50)};
    }


    h1{
        align-items: center;
        padding-top: ${px2vw(30)};
        padding-bottom: ${px2vw(30)};
        font-size: ${px2vw(60)};
        color:#fff;
    }

    p{
        text-align:justify;
        font-size: ${px2vw(28)};
        line-height: ${px2vw(35)};
        text-align: justify;
        color: #fff;
        padding-bottom: ${px2vw(10)};
    }

    .area{
        display: flex;
        align-items: center ;
        margin-left:${px2vw(50)};
        margin-bottom:${px2vw(20)};
        margin-top:${px2vw(10)};
    }


    .column-text{
        float: left;
        width: 45%;
        padding: 10px;
        margin-right: auto;
        margin-left: auto;
    }

    .column-img{
        float: right;
        width: 45%;
        padding: 10px;
        margin-right: auto;
        margin-left: auto;
    }

    .column-img img{
        width: 80%;
        height: 45%
    }

    .column-img .normal img{
        width: 70%;
        height: 45%
    }

    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
    }

    hr{
        width: 98%;
        border: 1px solid rgba(255,255,255, 0.25);
    }

    .nfts-imgs{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: ${px2vw(20)};
        margin-bottom: ${px2vw(20)};
    }
    
    .border-nft img{
        /* border: 5px solid #ffcc33;
        border-radius: 20px; */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
`;
