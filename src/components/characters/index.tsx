import React from 'react';
import Card from '../card';

import { Container } from './styles';

const Characters: React.FC = () => {

  return (
    <Container> 
       <Card title="PHASE 1" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

       <Card title="PHASE 2"  
       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

       <Card title="PHASE 3"  
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

    </Container> 
  );
};

export default Characters;