import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    .details{
        display: flex;
        padding: 50px;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        background-color: rgba(0,0,0, 0.20);
        max-height: 450px;
        margin-right: 10%;
        width: 30%;
        box-shadow:rgba(0,0,0, 0.20) 1.95px 1.95px 2.6px; 
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
        padding-bottom: 10px;
        color: #ffcc33;
    }

    li{
        color: #fff;
        margin-bottom: 20px;
        list-style-type: none;
    }
    
`;
