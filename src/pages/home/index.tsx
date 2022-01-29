import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import GlobalStyles from'../../styles/global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {Contents} from './styles';

import bg from '../../assets/img/background.png';
import logo from '../../assets/img/logof.png';
import troca from '../../assets/img/TROCA.png';
import svw from '../../assets/img/STW.png';
import lands from '../../assets/img/lands.png';
import tokenomics from '../../assets/img/teste.png';

//Nfts
import princess from '../../assets/img/nfts/princess.png';
import gladiator from '../../assets/img/nfts/gladiator.png';
import astronaut from '../../assets/img/nfts/astronaut.png';
import witch from '../../assets/img/nfts/witch.png';
import zumbie from '../../assets/img/nfts/zumbie.png';

const handleDragStart = (e: any) => e.preventDefault();

const items = [
   <div className="column-text column-text-roadmap" onDragStart={handleDragStart} role="presentation" >
   <h2>Q1 - 2022</h2>
   <ul className="ul-roadmap">
      <li className="roadmap-item"><p>🌳 Discord and Telegram comunitty</p></li>
      <li className="roadmap-item"><p>🌳 Twitter account</p></li>
      <li className="roadmap-item"><p>🌳 Website</p></li>
      <li className="roadmap-item"><p>🌳 Whitepaper</p></li>
      <li className="roadmap-item"><p>🌳 Marketing</p></li>
      <li className="roadmap-item"><p>🌱 Pre sale</p></li>
   </ul>
   </div>,
   <div className="column-text column-text-roadmap" onDragStart={handleDragStart} role="presentation">
      <h2>Q2 - 2022</h2>
      <ul className="ul-roadmap">
         <li className="roadmap-item"><p>🌱 P2E alpha for presale</p></li>
         <li className="roadmap-item"><p>🌱 Game bug fix</p></li>
         <li className="roadmap-item"><p>🌱 PBEE token launch</p></li>
         <li className="roadmap-item"><p>🌱 Intensify marketing</p></li>   
         <li className="roadmap-item"><p>🌱 Official Version of P2E Game</p></li>
          
      </ul>
   </div>,
   <div className="column-text column-text-roadmap" onDragStart={handleDragStart} role="presentation">
      <h2>Q3 - 2022</h2>
      <ul className="ul-roadmap">
         <li className="roadmap-item"><p>🌱 Listing PBEE on Gate.io</p></li>
         <li className="roadmap-item"><p>🌱 Add more NFT skins</p></li>
         <li className="roadmap-item"><p>🌱 Adventure mode</p></li>
      </ul>
   </div>,
   <div className="column-text column-text-roadmap" onDragStart={handleDragStart} role="presentation">
      <h2>Q4 - 2022</h2>
      <ul className="ul-roadmap">
         <li className="roadmap-item"><p>🌱 Start physical ballast to save the bees</p></li>
         <li className="roadmap-item"><p>🌱 Marketplace launch</p></li>
         <li className="roadmap-item"><p>🌱 Add new items</p></li>
      </ul>
   </div>
 ];

 const responsive = {
   0: { items: 2 },
   568: { items: 2 },
   1024: { items: 3 },
};

const home: React.FC = () => {

  return (
    <>
      <GlobalStyles/>
      <Header/>
     
      <Contents>  
      <img className="bg" src={bg} alt="Planet bee background"/>
      <div className="logo">
         <img src={logo} alt="Planet bee logo"/>
      </div>
      
      <section id="play-to-yearn">
         <div className="area">  
            <div className="column-text play-text">
             <h1>PLAY TO EARN</h1>  
             <p>
               Assemble your squad of patrolling bees, 
               manage new explorations, discover new scenarios, 
               collect resources and get rewards in PBEE while 
               saving the planet bee and the real world.
             </p>
            </div>
            <div className="column-img  play-img">
             <img className='rule-img' src={troca} alt="Planet bee logo"/>
            </div>
         </div>
      </section>
      <hr className="endHR"/> 

      <section id="save-the-planet">
         
         <div className="area">  
            <div className="column-img">
               <img className="rule-img stp-img" src={svw} alt="Planet bee logo"/>
            </div>
            <div className="column-text save-text">
             <h1>SAVE THE PLANET</h1>
             <p>
               We are one of the first decentralized currency with a future physical ballast in a beekeeping project.
               <br/><br/>
               The planet is experiencing one of the most critical moments in history because of human intervention. 
               Join us and help turn around what we've destroyed for so long.
             </p>
            </div>
         </div>
      </section>
      <hr className="endHR"/> 

      <section id="characters">
         <h1>CHARACTERS</h1>
         <div className="nfts-imgs ">
           
            <img className='nft-outside' src={princess} alt="Planet bee logo"/>
            
            <img className='nft-side' src={gladiator} alt="Planet bee logo"/>
   
            <img className='nft-central' src={astronaut} alt="Planet bee logo"/>
                
            <img className='nft-side' src={zumbie} alt="Planet bee logo"/>
     
            <img className='nft-outside' src={witch} alt="Planet bee logo"/>
           
         </div>
         <div className="area">  
            <div className="column-text characters-text">
             <p>
               Acquire NFTs from our in-game store and grow your bee army to help revitalize the world while increasing your PBEE earnings.
               <br/>
               Each NFT has a different rarity, which is defined by the bee's energy, speed and strength.
             </p>
            </div>
         </div>
         
      </section>
      <hr className="endHR"/> 

      <section id="lands">
         <div className="area">  
            <div className="column-text lands-text">
             <h1>LANDS</h1>
             <p>
               Get your own land from our in-game 
               store and put the bees to rest with much 
               more comfort and speed, increasing your 
               work productivity and PEE gains. 
             </p>
            </div>
            <div className="column-img">
             <img className='rule-img lands-img' src={lands} alt="Planet bee logo"/>
            </div>
         </div>
      </section>
      <hr className="endHR"/> 

      <section id="roadmap">
         <h1>ROADMAP</h1>
         <div className="area roadmap-area">
            <AliceCarousel  mouseTracking items={items} responsive={responsive} controlsStrategy="default,alternative" disableButtonsControls />
         </div>
      </section>
      <hr className="endHR"/> 

      <section id="tokenomic">
         <h1>TOKENOMIC</h1>
         <div className="area">  
               <img className='token-img' src={tokenomics} alt="Planet bee logo"/>
         </div>
         <ul className="ul-suply">
            <li className="supply"><h3>Starting Price: X,XX</h3></li>
            <li className="supply"><h3>Token: PBEE</h3></li>
            <li className="supply"><h3>Total Supply: 100.000.000</h3></li>
         </ul>
         <div className='contract'>
            <h3>SMART CONTRACT</h3>
            <p>- Coming Soon -</p>
         </div>
      </section>

      <hr className='endFooter'/>
      <Footer/>
      </Contents>   
    </>
  );
};

export default home;