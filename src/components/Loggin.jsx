import React from 'react';
import styled from 'styled-components';

function Loggin() {
   return (
      <LogginWrapper>
         <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
         </form>
      </LogginWrapper>
   );
}

const LogginWrapper = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
`;

export default Loggin;
