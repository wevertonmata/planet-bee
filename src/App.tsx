import React from 'react';
import GlobalStyles from './styles/global';
import {Main, Box, Inverse, Footer} from './styles';

import Header from './components/Header';
import Home from './components/home';
import Characters from './components/characters';
import LineLeft from './components/line-left';
import LineRight from './components/line-right';

function App() {
  React.useEffect(() => {window.scrollTo({top: 0})},[])
  
  return (
      <>
        <GlobalStyles />
        <Header />

        <Main>
          <Box className="home">
            <Home />
          </Box>
          <Characters/>
          <LineLeft/>
          <Inverse>
            <LineRight/>
          </Inverse>  
          <Footer/>
        </Main>
      </>
  );
}

export default App;
