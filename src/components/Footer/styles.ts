import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    

    hr{
        border: 1px solid rgba(0,0,0, 0.25);
    }

    p{
        text-align:justify;
        font-size: 16px;
        line-height: 26px;
        text-align: justify;
        color: #fff;
        padding-bottom: 10px;
    }

    h1{
        align-items: center;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        color: #ffcc33;
    }

    .social{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;

    }

    a{
        margin-top: 20px;
        text-decoration: none;
        color: white;
        border: none;
        margin: 0px 10px; 
        border-radius: 4px;
    }

    span{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: stretch;
        width: 120px;
    }

    .Discord svg{
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }
    .Twitter svg{
        width: 30px;
        height: 30px;
    }

    footer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        height: 60px;
        //background: rgba(0,0,0, 0.15);
        border-radius: 4px;
        color: #fff;
        //box-shadow: rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px; 
    }
    
`;
