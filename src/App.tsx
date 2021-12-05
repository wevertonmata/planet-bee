import React from 'react';
import GlobalStyles from './styles/global';
import Home from './components/home';

function App() {
  React.useEffect(() => {window.scrollTo({top: 0})},[])
  
  return (
      <>
        <GlobalStyles />
        <Home /> 
      </>
  );
}

export default App;
