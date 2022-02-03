import { useState } from 'react';

import styled from 'styled-components';
import { mockProducts } from '../mockProducts';

function Header() {
   const [test, setTest] = useState();

   function addToLocalStorage() {
      localStorage.setItem('data', JSON.stringify(mockProducts));
   }

   function changeSeomthing() {
      let testData = JSON.parse(localStorage.getItem('data')!);
      testData[0].amount = testData[0].amount - 1;
      console.log(testData[0].amount);

      localStorage.setItem('data', JSON.stringify(testData));
   }

   return (
      <HeaderWrapper>
         <h1>LOGO</h1>
         <h1>CART</h1>
         <button onClick={addToLocalStorage}>Add me</button>
         <div>
            <button onClick={changeSeomthing}>+</button>
         </div>
      </HeaderWrapper>
   );
}

const HeaderWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem 1rem 2rem;
`;
export default Header;
