import React from 'react';

import { Container } from './styles';
import logo from '../../assets/img/logof.png';

const Header: React.FC = () => {

  return (
    <>
      <Container > 
        <nav>
          <a href="#page" className='logo-a'><img src={logo} className='logo' alt="Planet bee logo"/></a>
          <div className='bottons-nav'>
            <a href="#page"><h4>HOME</h4></a>
            <a href="#page"><h4>PRE SALE</h4></a>
            <a href="#page"><h4>WHITEPAPER</h4></a>
            <a href="#page"><h4>ROADMAP</h4></a>
            <a href="#page"><h4>TOKENS</h4></a>
          </div>
          <a href="#page" className="play"><h4>PLAY NOW</h4></a>
        </nav>
      </Container>
    </>     
  );
};

export default Header;
