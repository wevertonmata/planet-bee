import React from 'react';

import { Container } from './styles';

import nft from '../../assets/img/ABELHA-TESTE.png'


export default function  card(): JSX.Element {
  return (
    <Container> 
       <div className="details">
          <h1>CLASS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul>
             <li>Lorem ipsum</li>
             <li>Lorem ipsum</li>
             <li>Lorem ipsum</li>
             <li>Lorem ipsum</li>
          </ul>
       </div>
       <div className="art">
          <img src={nft} alt="Planet bee nft"/>
       </div>
    </Container> 
  );
};