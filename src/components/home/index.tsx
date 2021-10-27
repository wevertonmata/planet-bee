import React from 'react';

import { Contents } from './styles';
import art from '../../assets/img/art-no-title.png'

const home: React.FC = () => {

  return (
       <Contents> 
       <div className="about">
            <h1>PLANET BEE</h1>
            <p>
              Planet Bee ("PBE") é um jogo web de farm, inspirado em jogos amplamente conhecidos, 
              tanto no mundo do blockchain (PlantVsUndead, Block Farm) quanto fora dele (FarmFrenzy, HappyFarm).
            </p>
            <p>
              O jogo se passa na Terra, mas alguns anos no futuro e em uma realidade distópica, onde devido ao grande descuido humano com 
              o planeta, ele está morrendo, e precisamos da ajuda das “Abelhas” que restaram para salvá-lo.
            </p>
       </div>
       <div className="art">
          <img src={art} alt="Planet bee art"/>
       </div>
      </Contents> 
  );
};

export default home;