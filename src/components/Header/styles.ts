import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    width: 80%;
    height: 100px;
    border-radius: 4px;
    background:  rgba(0,0,0, 0.15);
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px;

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    a { 
    color: #ffcc33;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    
    }

    /* a:hover {
        color: #fff;
        cursor: pointer;
    } */

    .whitepaper{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffcc33;
        border: solid 2px #ffcc33;
        border-radius: 4px;
        height: 40px;
        width: 150px;
    }
`;
