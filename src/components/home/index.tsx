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
import bees from '../../assets/img/bees.png';

//import normal from '../../assets/img/nfts/normal.png';
import princess from '../../assets/img/nfts/princess.png';
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
      
      <section className="item">
         <h1>PLAY TO EARN</h1>
         <div className="area">  
            <div className="column-text">
             <p>
             Assemble your squad of bees, manage 
             new explorations, discover 
             new scenarios, collect resources of varied 
             rarities and get rewards in PBEE.
             </p>
            </div>
            <div className="column-img">
             <img className='rule-img' src={troca} alt="Planet bee logo"/>
            </div>
         </div>
      </section>
      <hr/> 

      <section className="item">
         <h1>SAVE THE WORLD</h1>
         <div className="area">  
            <div className="column-img  save-column-img">
               <img className="rule-img save-img" src={svw} alt="Planet bee logo"/>
            </div>
            <div className="column-text save-text">
             <p>
               <br/>
               We are the first decentralized currency with a future physical backing in a beekeeping project.
               <br/><br/>
               Bees are extremely important to our lives and the environment, but they are dying because of human beings' daily actions with the planet.
               <br/><br/>
               Join the cause and help reverse what we destroyed for so long. 
             </p>
            </div>
         </div>
      </section>
      <hr/> 

      <section className="item">
         <h1>CHARACTERS</h1>
         <div className="area">  
            <div className="column-text">
             <p>
               <br/>
               Acquire new NFT characters as a reward 
               for rare hives in-game or in our home 
               market.<br/>
               Grow your exploration fleet and help 
               revitalize the world while increasing 
               your expedition earnings. 
             </p>
            </div>
            <div className="column-img normal">
             <img className='rule-img' src={bees} alt="Planet bee logo"/>
            </div>
         </div>
         <div className="nfts-imgs">
            <div className="border-nft">
               <img className='nft-outside' src={princess} alt="Planet bee logo"/>
            </div>

            <div className="border-nft">
               <img className='nft-side' src={gladiator} alt="Planet bee logo"/>
            </div>

            <div className="border-nft">
               <img className='nft-central' src={astronaut} alt="Planet bee logo"/>
            </div>

            <div className="border-nft">
               <img className='nft-side' src={zumbie} alt="Planet bee logo"/>
            </div>

            <div className="border-nft">
               <img className='nft-outside' src={witch} alt="Planet bee logo"/>
            </div>
            {/* <div className="border-nft">
               <img src={normal} alt="Planet bee logo"/>
            </div> */}
         </div>
      </section>
      <hr/> 

      <section className="item">
         <h1>LANDS</h1>
         <div className="area">  
            <div className="column-img">
             <img className='rule-img land-img' src={lands} alt="Planet bee logo"/>
            </div>
            <div className="column-text">
             <p>
               Get your own land and put the bees 
               to rest with much more comfort and 
               speed, increasing work productivity. 
             </p>
            </div>
         </div>
      </section>
      <hr/> 

      {/* <section className="item">
         <h1>ROADMAP</h1>
         <div className="area">  
            
         </div>
      </section>
      <hr/>  */}

      <section className="item">
         <h1>TOKENOMIC</h1>
         <div className="area  tokenomics-area">  
            <div className="column-text">
               <ul className='tokenomics-lista'>
                  <li className='tokenomics-item tokenomics-item--play'>50% - Play to earn</li>
                  <li className='tokenomics-item tokenomics-item--team'>10% - Team</li>
                  <li className='tokenomics-item tokenomics-item--liquidity'>20% - Liquidity</li>
                  <li className='tokenomics-item tokenomics-item--private'>8% - Private sale</li>
                  <li className='tokenomics-item tokenomics-item--public'>7% - Public sale</li>
                  <li className='tokenomics-item tokenomics-item--marketing'>5% - Marketing</li>
               </ul>
            </div>
            <div className="column-img">
               <img className='rule-img' src={tokenomics} alt="Planet bee logo"/>
            </div>
         </div>
         <h1 className='supply'>Total Supply: 100.000.000</h1>
      </section>
      <hr/>

      <Footer/>
      </Contents>   
    </>
  );
};

export default home;