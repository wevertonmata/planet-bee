import styled from 'styled-components';

export const Container = styled.div`
    width: 55%;
    //height: 300px;
    margin-left: 0;
    margin-right: 10%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    padding-bottom: 30px;
    background-color: rgba(0,0,0, 0.15);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    box-shadow: rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px;    

    h1 {
        color: #ffcc33;
        margin-top: 20px;
    }

    p{
        font-weight: 300;
        margin-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: justify;  
    }
`;

