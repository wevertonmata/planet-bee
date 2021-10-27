import styled from 'styled-components';


export const Main = styled.main`
    
    height: 100px;
    margin-top: 20px;
    /* 
    width: 80%;
    margin-left: auto;
    margin-right: auto; 
    */
`;

export const Box = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background-color: rgba(0,0,0, 0.15);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    box-shadow: rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px;    

    h1 {
        color: #ffcc33;
    }

    p{
        font-weight: 500;
    }
`;

export const Inverse = styled.main`
    display: flex;
    flex-direction: row-reverse;
`;

export const Footer = styled.main`
    display: flex;
    height: 500px;
    margin-top: 40px;
`;






