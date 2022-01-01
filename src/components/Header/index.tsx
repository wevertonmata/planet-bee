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
          <a href="##"><h4>HOME</h4></a>
          <a href="##"><h4>PRE SALE</h4></a>
          <a href="##"><h4>WHITEPAPER</h4></a>
          <a href="##"><h4>ROADMAP</h4></a>
          <a href="##"><h4>TOKENS</h4></a>
          <a href="##" className="play"><h4>PLAY NOW</h4></a>
        </div>
      </Container>
    </>     
  );
};

export default Header;
