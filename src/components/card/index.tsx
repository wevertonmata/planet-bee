import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  text?: string;
}

export default function  card(props: Props): JSX.Element {
  return (
    <Container> 
       <h1>{props.title}</h1>
       <p>{props.text}</p>
    </Container> 
  );
};