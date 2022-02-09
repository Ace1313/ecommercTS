import { useContext } from 'react';
import { AppContext } from '../components/context/AppContext';
import styled from 'styled-components';

import CartItems from '../components/CartItems';
import { getLocalCart } from '../components/utilities/helpers';
import Navbar from '../components/Navbar';

function Cart() {
   const { state } = useContext(AppContext);

   const cartState = getLocalCart();

   const totalPrice = cartState.reduce((total: number, item: any) => {
      return total + item.price * item.amount;
   }, 0);

   return (
      <Wrapper>
         <Navbar />

         <h1 className="totalsum"> Total: {totalPrice} $ </h1>
         <div className="card">
            {state.cart &&
               state.cart.map((item: any) => <CartItems key={item.id} {...item} />)}
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .card {
      display: grid;
      grid-template-rows: 420px 420px 420px;
      grid-template-columns: 300px 300px 300px;
      justify-content: center;
      align-content: center;
      gap: 3rem;
      margin-top: 3rem;
      padding-top: 1rem;
   }

   h1 {
      display: flex;
      justify-content: center;
   }
`;

export default Cart;
