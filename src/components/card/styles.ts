import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    padding: ${px2vw(25)};
    flex-direction: column;
    align-items: center;
    border-radius: ${px2vw(20)};
    background-color: rgba(0,0,0, 0.20);
    margin-top: ${px2vw(40)};
    max-height: ${px2vw(350)};
    width: 30%;
    box-shadow:rgba(0,0,0, 0.20) 1.95px 1.95px 2.6px; 
    
`;
