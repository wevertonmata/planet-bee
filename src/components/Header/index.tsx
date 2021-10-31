import React from 'react';

import { Container } from './styles';

import logo from '../../assets/img/logo-horizontal-yellow.png';

const Header: React.FC = () => {

  return (
    <Container > 

      <div  className="menu">
        <div className="logo">
          <img src={logo} alt="Planet bee logo"/>
        </div>
        <a href="#home">RoadMap</a>
        <a href="#home">NFTs </a>
        <a href="#home" className="whitepaper">Whitepaper</a>
      </div>
      
    </Container>
     
  );
};

export default Header;
