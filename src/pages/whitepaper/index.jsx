/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import {Contents} from './styles';

const whitepaper = () => {
  
    return (
      <>
        <Contents>
          <div
            dangerouslySetInnerHTML={{__html: '<object data="https://theuselessweb.com/"  width="800"  height="800"  type="text/html" </object>'}}
          />
   
        </Contents>
      </>
    );
};
    
export default whitepaper;
