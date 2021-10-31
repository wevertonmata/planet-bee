import React from 'react';
import Card from '../card';

import { Container } from './styles';

const Characters: React.FC = () => {

  return (
    <Container> 
       <Card title="MISSION" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

       <Card title="PLAY TO EARN"  
       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

       <Card title="CHARACTERS"  
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

    </Container>
  );
};

export default Characters;