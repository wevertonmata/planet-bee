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
        width: 100vw;
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
        padding-top: ${px2vw(40)};
        padding-bottom: ${px2vw(10)};
        font-size: ${px2vw(55)};
        color:#fff;
        font-family: var(--montserrat);
    }

    p{
        text-align:justify;
        font-size: ${px2vw(22)};
        line-height: ${px2vw(45)};
        text-align: justify;
        color: #fff;
        padding-bottom: ${px2vw(10)};
        font-weight: 300;
    }

    .area{
        display: flex;
        align-items: center ;
        margin-left:${px2vw(50)};
        margin-bottom:${px2vw(10)};
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
    .column-token-img{
        width: 90%;
        padding: 10px;
        margin-right: auto;
        margin-left: auto;
    }


    .rule-img {
        width:  ${px2vw(400)};
    }

    .token-img {
        width: 70%;
    }



    .save-img {
        left: 0;
        position: absolute;
        z-index: -1;
        margin-top: ${px2vw(-180)};  
    }

    .save-text{
        width: 50%;
        margin-top: ${px2vw(20)}; 
    }

    .save-column-img{
        width: 35%;
        margin-left: 0;
        margin-right: 0;
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

    .normal{
        margin-left: ${px2vw(120)};
    }

    .nfts-imgs{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${px2vw(20)};
    }
    
    .border-nft {
        /* border: 5px solid #ffcc33;
        border-radius: 20px; */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .nft-central{
        width: 75%;
    }

    .nft-side{
        width: 60%;
        margin-top:  ${px2vw(-50)}; 
    }

    .nft-outside{
        width: 50%;
        margin-top:  ${px2vw(-120)}; 
    }

    .tokenomics-text{
        float: left;
        width: 50%;
        margin-right: 0;
        margin-left: 0;
        padding-right:${px2vw(200)};
    }

    .tokenomics-lista {
    text-align:justify;
    font-size: ${px2vw(32)};
    line-height: ${px2vw(60)};
    text-align: justify;
    color: #fff;
    text-shadow: #ddd 1px 0 1px;
    padding-bottom: ${px2vw(10)};
    list-style: none;
}

    .tokenomics-item {
        box-sizing: border-box;
        background-repeat: no-repeat;
        
        padding-left: 1em; 
        text-indent: 1em;
        line-height: ${px2vw(75)};
        font-weight: 400;
    }

    .supply{
        font-size: ${px2vw(32)};
        margin-bottom: ${px2vw(10)};
    }

`;
