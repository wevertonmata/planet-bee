import { motion } from 'framer-motion';
import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled(motion.div)`
    width: 80%;
    border-radius:  ${px2vw(4)};
    background:  rgba(0,0,0, 0.15);
    margin-top: ${px2vw(20)};
    margin-bottom: ${px2vw(40)};
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
    font-size:  ${px2vw(18)};
    font-weight: bold;
    
    }

    .whitepaper{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffcc33;
        border: solid  ${px2vw(2)} #ffcc33;
        border-radius:  ${px2vw(4)};
        height:  ${px2vw(40)};
        width:  ${px2vw(150)};
    }
`;
