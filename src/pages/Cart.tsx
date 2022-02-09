import { useContext } from 'react';
import { AppContext } from '../components/context/AppContext';
import styled from 'styled-components';

import CartItems from '../components/CartItems';
import { getLocalCart } from '../components/utilities/helpers';

function Cart() {
   const { state } = useContext(AppContext);

   const cartState = getLocalCart();

   const totalPrice = cartState.reduce((total: number, item: any) => {
      return total + item.price * item.amount;
   }, 0);

   return (
      <Wrapper>
         {state.cart &&
            state.cart.map((item: any) => <CartItems key={item.id} {...item} />)}
         <h1> Total sum {totalPrice} $ </h1>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
   grid-template-rows: 420px 420px 420px;
   grid-template-columns: 300px 300px 300px;
   justify-content: center;
   align-content: center;
   gap: 3rem;
   margin-top: 3rem;
   padding-top: 1rem;
`;

export default Cart;
