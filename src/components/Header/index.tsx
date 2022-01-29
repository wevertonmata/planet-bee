import React from 'react';

import { Container } from './styles';
import logo from '../../assets/img/logof.png';
import { Link } from 'react-router-dom';



const Header: React.FC = () => {

  return (
    <>
      <Container > 
        <nav>
          <Link to="/" className='logo-a'><img src={logo} className='logo' alt="Planet bee logo"/></Link>
          <div className='bottons-nav'>
            <a href="/#play-to-yearn" className='bottons'><h4>HOME</h4></a>
            <a href="/#characters" className='bottons'><h4>CHARACTERS</h4></a>
            <a href="https://planetbee.gitbook.io/planetbee/" className='bottons'><h4>WHITEPAPER</h4></a>
            <a href="/#roadmap" className='bottons'><h4>ROADMAP</h4></a>
            <a href="/#tokenomic" className='bottons'><h4>TOKENS</h4></a>
          </div>
          <a href="/" className="play bottons"><h4>PLAY NOW</h4></a>
        </nav>
      </Container>
    </>     
  );
};

export default Header;
