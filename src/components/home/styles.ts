import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

import bullet from '../../assets/img/bullet.png';

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 1em auto;
    }

    .area{
        display: flex;
        flex-direction: row;
        align-items: center ;
        margin-left: 0;
    }

    hr{
        width: 98%;
        border: 1px solid rgba(255,255,255, 0.25);
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1em;
        padding-bottom: 1em;
        font-size: ${px2vw(40)};
        color:#ffcc33;
        font-family: var(--montserrat);
        text-shadow: #000 0.25em 0.15em 0.5em;
    }

    p{
        text-align:justify;
        font-size: ${px2vw(23)};
        line-height: 2em;
        color: #fff;
        font-weight: 400;
    }

    
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }


    .column-text{
        float: left;
        width: 45%;
        padding: 0.5em 0;
        margin: 0 auto;
    }

    .column-img{
        display: flex;
        justify-content: center;
        float: right;
        width: 45%;
        padding: 1em;
    }

    .rule-img {
        width:  ${px2vw(400)};
        padding-top: 1.5em;
    }

    // background-image 
    .bg {
        width: 100%;
    }

    .bg img{
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .logo img{
        width: ${px2vw(150)};
        margin-top:  ${px2vw(-60)};
    }

    //images

    .play-img{
        padding-left: 5em;
    }

    .stw-img{
        padding-top: 4.5em;
        width:  ${px2vw(450)};
    }

    //Characters

    .characters-text{
        width: 84%;
        text-align: justify;
        padding-bottom: 2em;
        padding-top: 0;
        
    }

    .nfts-imgs{
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1.75em 0;

    }
    
    .border-nft {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nft-central{
        width: 70%;
    }

    .nft-side{
        width: 60%;
        margin-top:  ${px2vw(-50)}; 
    }

    .nft-outside{
        width: 50%;
        margin-top:  ${px2vw(-120)}; 

    }

    //Roadmap

    .roadmap-area{
        width: 90%;
        display: flex;
        align-items: center;
    }
    .column-text-roadmap{
        display: flex;
        justify-content: space-around;
    }

    h2{
        color: #fff;
        //text-decoration: underline;

    }
    
    .ul-roadmap {
        list-style-image: url(${bullet});
        color: #fff;
        padding: 2em;
        
    }

    //Tokenomics

    .token-img{
        width: 75%;
        padding: 1em;  
        margin-right: auto;
        margin-left: auto;
    }

    .ul-suply{
        display: flex;
        flex-direction: row;
        width: ${px2vw(950)};
        justify-content: space-around;
    }

    .supply{
        padding: 2em;
        color: #fff;
        font-weight: 700;
    }


    .contract{
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 0.5em;
        border: 2px solid #fff;
        border-radius: 0.5em;
        margin-bottom: 1.5em;
    }

    @media screen and (max-width: 767px) {

        .bg {
        width: 100%;
    }

        .area{
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
        }

        p{
            font-size: ${px2vw(28)};
        }

        .column-text{
            width: 90%;
            padding: 1em 0;
            margin-right: auto;
            margin-left: auto;
        }

        .column-img{
            display: flex;
            justify-content: center;
            width: 50%;
            padding: 1em;
            margin-right: auto;
            margin-left: auto;
        }

        .play-img{
            padding-left: 0;
        }

        .normal{
            display: none;
        }

        br{
            line-height: 0%;
        }

        .nfts-imgs{
            margin-top: 2em;
        }


    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {

        .area{
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
        }

        p{
            font-size: ${px2vw(28)};
        }

        .column-text{
            width: 90%;
            padding: 1em 0;
            margin-right: auto;
            margin-left: auto;
        }

        .column-img{
            display: flex;
            justify-content: center;
            width: 50%;
            padding: 1em;
            margin-right: auto;
            margin-left: auto;
        }

        .play-img{
            padding-left: 0;
        }

        .normal{
            display: none;
        }

        br{
            line-height: 0%;
        }

        .nfts-imgs{
            margin-top: 2em;
        }

    }

`;

