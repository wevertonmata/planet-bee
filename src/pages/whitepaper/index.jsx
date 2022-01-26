import React from 'react';

import {Contents} from './styles';

const whitepaper = () => {

    const data = '<object data="https://rafael-costa-souza.gitbook.io/planetbee/" />';

    return (
      <>
        <Contents>
          <div
            dangerouslySetInnerHTML={{__html: data}}
          />
        </Contents>
      </>
    );
};
    
export default whitepaper;
