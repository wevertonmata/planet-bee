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
          <a href="#home"><h3>HOME</h3></a>
          <a href="#home"><h3>PRE SALE</h3></a>
          <a href="#home"><h3>WHITEPAPER</h3></a>
          <a href="#home"><h3>ROADMAP</h3></a>
          <a href="#home" className="play"><h3>PLAY NOW</h3></a>
        </div>
      </Container>
    </>     
  );
};

export default Header;
