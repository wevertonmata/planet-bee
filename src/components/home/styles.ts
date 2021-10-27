import styled from 'styled-components';

export const Contents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h1{
        align-items: center;
        padding-bottom: 10px;
        font-size: 72px;
        color:#ffcc33;
    
    }

    p{
        text-align:justify;
        font-size: 16px;
        line-height: 26px;
        text-align: justify;
        color: #fff;
        padding-bottom: 10px;
    }

    .about{
        flex: 1;
        margin-left:50px;
        justify-content: center;
    }

    .art{
        flex: 1;
        justify-content: center;
    }

    .art img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 400px;
    }
`;
