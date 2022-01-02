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
        padding-top: 0.75em;
        font-size: ${px2vw(55)};
        color:#fff;
        font-family: var(--montserrat);
        text-shadow: #000 0.25em 0.15em 0.5em;
    }

    p{
        text-align:justify;
        font-size: ${px2vw(22)};
        line-height: 2em;
        color: #fff;
        font-weight: 400;
    }

    .area{
        display: flex;
        align-items: center ;
        margin-left: 0;
        margin-bottom: 1em;
        margin-top: 0.5em;
    }


    .column-text{
        float: left;
        width: 45%;
        padding: 0.5em 0;
        margin-right: auto;
        margin-left: auto;
    }

    .column-img{
        float: right;
        width: 45%;
        padding: 1em;
        padding-left: 1em;
        margin-right: auto;
        margin-left: auto;
    }

    .play-img{
        padding-left: 5em;
    }

    .rule-img {
        width:  ${px2vw(400)};
        padding-top: 1.5em;
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
        border: 0.1em solid rgba(255,255,255, 0.25);
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

    .token-img{
        width: 80%;
        padding: 1em;  
        margin-top: 2em;
        margin-right: auto;
        margin-left: auto;
    }

    .supply{
        font-size: ${px2vw(32)};
        margin-bottom: ${px2vw(10)};
    }

    @media screen and (max-width: 767px) {

        .bg{display:none}

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

        .bg{display:none}
        
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

