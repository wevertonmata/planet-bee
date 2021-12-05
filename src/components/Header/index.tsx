import React from 'react';

import { Container } from './styles';
import logo from '../../assets/img/logof.png';

const Header: React.FC = () => {

  return (
    <>
      <Container > 
        <div className="menu">
          <div className="logo">
            <img src={logo} alt="Planet bee logo"/>
          </div>
          <a href="#home">HOME</a>
          <a href="#home">BUY TOKEN</a>
          <a href="#home">WHITEPAPER</a>
          <a href="#home">FAQ</a>
          <a href="#home" className="play">PLAY NOW</a>
        </div>
      </Container>
    </>     
  );
};

export default Header;
