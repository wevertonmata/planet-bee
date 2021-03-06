import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

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
        margin: 0 auto;
        margin-bottom: 0.5em;
    }

    .area{
        display: flex;
        flex-direction: row;
        align-items: center ;
        margin: 0 auto;
    }

    .endHR{
        width: 98%;
        border: 0.01em solid rgba(255,255,255, 0.25);
        background-color: rgba(255,255,255, 0.25);
        margin: 3em 0;
    }

    .endFooter{
        margin-top: 3em;
        margin-bottom: 1em;
        width: 98%;
        border: 0.01em solid rgba(255,255,255, 0.25);
        background-color: rgba(255,255,255, 0.25);
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 0.5em;
        font-size: ${px2vw(45)};
        color: #ffde00;
        font-family: var(--poppins);
        font-weight: 700;
        text-shadow: 4.25px 2px 5px rgba(0, 0, 0, 0.8);
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
        margin: 0 auto;
    }

    .column-img{
        display: flex;
        justify-content: center;
        float: right;
        width: 45%;
        padding: 1em;
        padding-bottom: 0;
    }

    .rule-img {
        width:  ${px2vw(400)};
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
        padding-left: 2em;
        padding-top: 2em;
        display: flex;
        justify-content: center;
    }




    #lands{
        margin-bottom: 0;
    }

    //Characters

    .characters-text{
        width: 80%;
        text-align: justify;
        //padding-bottom: 2em;
        padding-top: 2em;
    }

    .nfts-imgs{
        width: 85%;
        display: flex;
        flex-direction: row;   
        align-items: flex-end;
        justify-content: space-evenly;
        padding-top: 0.5em;
    }
    
    .border-nft {
        padding: 0 auto;
    }

    .nft-central{
        width: 18%;
        margin: 0 .25em;
    }

    .nft-side{
        width: 15%;
        //margin-top:  ${px2vw(70)}; 
    }

    .nft-outside{
        width: 13%;
        //margin-top:  ${px2vw(140)}; 
    }

    .lands-img{
        width: 55%;
        align-items: flex-start;
    } 

    .lands-text{
        padding-top: 3em;
    }

    //Roadmap

    #roadmap{
        width: 100%;
    }

    .roadmap-area{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .column-text-roadmap{
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    h2{
        color: #fff;
        align-self: center;
        border-bottom: 0.1em solid #ffde00;
        border-radius: 0.1em;
    
    }
    
    .ul-roadmap {
        color: #fff;
        padding-top: 1em;
        padding-left: 4em;
        display: flex;
        flex-direction: column;
        //margin: 0 auto;
        
    }

    .roadmap-item p{
        text-align: left;
        padding-left: ${px2vw(75)};
        font-size: ${px2vw(24)};
        padding-bottom: 0.01em;
    }

    .land-area{
        align-items: flex-start;
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
        margin-left: 2em;
    }


    .contract{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding-top: 0.5em;
        border: 1.5px solid #fff;
        border-radius: 0.5em;
    }

    #tokenomic{
        margin-bottom: 0;
    }

    @media screen and (max-width: 767px) {

        h1{
            font-size: ${px2vw(75)};
            //padding-top: 0.5em;
        }

        h2{
            font-size: ${px2vw(55)};
        }

        h3{
            font-size: ${px2vw(32)};
        }

        p{
            font-size: ${px2vw(36)};
        }

        .roadmap-item p{
            font-size: ${px2vw(38)};
            padding-bottom: 0.25em;
        }

        .play-text{
            float: left;
            width: 55%;
            margin: 0 auto;
            margin-left: ${px2vw(100)};
        }

        .save-text{
            width: 60%;
            margin-right: ${px2vw(100)};
        }

        .lands-text{
            width: 55%;
            margin-left: ${px2vw(100)};
            padding-top: 5em;
        }

        .rule-img {
            width:  ${px2vw(500)};
            padding-top: 5em;
        }

        .lands-img{
            padding-top: 0;
        }

        section{
            width: 100%;
        }

        .token-img{
            width: 90%;
        }

        .contract p{
            font-size: ${px2vw(32)};
        }
    }


    @media screen and (min-width: 768px) and (max-width: 1024px) {
    }

`;

