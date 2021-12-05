import React from 'react';

import Header from './../Header/index';
import Footer from '../Footer';

import {Contents} from './styles';

import bg from '../../assets/img/BG.png';
import logo from '../../assets/img/logof.png';
import troca from '../../assets/img/TROCA.png';
import svw from '../../assets/img/STW.png';
import lands from '../../assets/img/lands.png';
import tokenomics from '../../assets/img/TOKENOMICS.png';
//NFT
import normal from '../../assets/img/nfts/normal.png';
import gladiator from '../../assets/img/nfts/gladiator.png';
import astronaut from '../../assets/img/nfts/astronaut.png';
import witch from '../../assets/img/nfts/witch.png';
import zumbie from '../../assets/img/nfts/zumbie.png';



const home: React.FC = () => {

  return (
    <>
      <Header/>
     
      <Contents>  
      <img className="bg" src={bg} alt="Planet bee background"/>
      <div className="logo">
         <img src={logo} alt="Planet bee logo"/>
      </div>
      
      <div className="item">
         <h1>PLAY TO EARN</h1>
         <div className="area">  
            <div className="column-text">
             <p>
                Aliquam erat volutpat. In pellentesque sapien eget vulputate venenatis.
                Suspendisse vulputate lacus sed pulvinar porttitor. Aliquam erat volutpat. 
                Curabitur bibendum nisl magna, eu posuere nunc sodales vel. 
             </p>
            </div>
            <div className="column-img">
             <img src={troca} alt="Planet bee logo"/>
            </div>
         </div>
      </div>
      <hr/> 

      <div className="item">
         <h1>SAVE THE WORLD</h1>
         <div className="area">  
            <div className="column-img">
             <img src={svw} alt="Planet bee logo"/>
            </div>
            <div className="column-text">
             <p>
                Aliquam erat volutpat. In pellentesque sapien eget vulputate venenatis.
                Suspendisse vulputate lacus sed pulvinar porttitor. Aliquam erat volutpat. 
                Curabitur bibendum nisl magna, eu posuere nunc sodales vel. 
             </p>
            </div>
         </div>
      </div>
      <hr/> 

      <div className="item">
         <h1>CHARACTERS</h1>
         <div className="area">  
            <div className="column-text">
             <p>
                Aliquam erat volutpat. In pellentesque sapien eget vulputate venenatis.
                Suspendisse vulputate lacus sed pulvinar porttitor. Aliquam erat volutpat. 
                Curabitur bibendum nisl magna, eu posuere nunc sodales vel. 
             </p>
            </div>
            <div className="column-img normal">
             <img src={normal} alt="Planet bee logo"/>
            </div>
         </div>
         <div className="nfts-imgs">
            <div className="border-nft">
               <img src={gladiator} alt="Planet bee logo"/>
            </div>
            <div className="border-nft">
               <img src={astronaut} alt="Planet bee logo"/>
            </div>
            <div className="border-nft">
               <img src={witch} alt="Planet bee logo"/>
            </div>
            <div className="border-nft">
               <img src={zumbie} alt="Planet bee logo"/>
            </div>
         </div>
      </div>
      <hr/> 

      <div className="item">
         <h1>LANDS</h1>
         <div className="area">  
            <div className="column-img">
             <img src={lands} alt="Planet bee logo"/>
            </div>
            <div className="column-text">
             <p>
                Aliquam erat volutpat. In pellentesque sapien eget vulputate venenatis.
                Suspendisse vulputate lacus sed pulvinar porttitor. Aliquam erat volutpat. 
                Curabitur bibendum nisl magna, eu posuere nunc sodales vel. 
             </p>
            </div>
         </div>
      </div>
      <hr/> 

      <div className="item">
         <h1>ROADMAP</h1>
         <div className="area">  
            
         </div>
      </div>
      <hr/> 

      <div className="item">
         <h1>TOKENOMIC</h1>
         <div className="area">  
            <div className="column-text">
             <p>
                Aliquam erat volutpat. In pellentesque sapien eget vulputate venenatis.
                Suspendisse vulputate lacus sed pulvinar porttitor. Aliquam erat volutpat. 
                Curabitur bibendum nisl magna, eu posuere nunc sodales vel. 
             </p>
            </div>
            <div className="column-img">
             <img src={tokenomics} alt="Planet bee logo"/>
            </div>
         </div>
      </div>
      <hr/>

      <Footer/>
      </Contents>   
    </>
  );
};

export default home;