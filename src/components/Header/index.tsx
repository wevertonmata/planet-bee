import React from 'react';

import { Container } from './styles';
import logo from '../../assets/img/logof.png';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {

  return (
    <>
      <Container > 
        <nav>
          <a href="/" className='logo-a'><img src={logo} className='logo' alt="Planet bee logo"/></a>
          <div className='bottons-nav'>
            <a href="/#play-to-yearn"><h4>HOME</h4></a>
            <a href="/#characters"><h4>CHARACTERS</h4></a>
            <Link to="/whitepaper"><h4>WHITEPAPER</h4></Link>
            <a href="/#roadmap"><h4>ROADMAP</h4></a>
            <a href="/#tokenomic"><h4>TOKENS</h4></a>
          </div>
          <a href="/whitepaper" className="play"><h4>PLAY NOW</h4></a>
        </nav>
      </Container>
    </>     
  );
};

export default Header;
