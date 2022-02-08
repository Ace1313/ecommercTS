import { useContext, useState } from 'react';
import { AppContext } from '../components/context/AppContext';
import { CartItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';
import { getLocalCart } from './utilities/helpers';

function CartItems({ id, imageUrl, title, inStock, price, amount }: CartItem) {
   const { dispatch } = useContext(AppContext);
   let cartLocalstate = getLocalCart();
   function incrementHandler() {
      const incId = id;

      if (amount >= inStock) {
         return;
      }

      cartLocalstate &&
         cartLocalstate.map((item: CartItem) => {
            if (item.id === incId) {
               return {
                  ...item,
                  amount: item.amount++,
               };
            }
            return item;
         });

      console.log(cartLocalstate);

      dispatch({ type: 'SET_CARTITEM_COUNT', payload: cartLocalstate });
      localStorage.setItem('Cart', JSON.stringify(cartLocalstate));
   }

   function decreaseHandler() {
      const incId = id;

      if (amount === 1) {
         const newArray = cartLocalstate.filter((item: any) => item.id !== incId);

         localStorage.setItem('Cart', JSON.stringify(newArray));
         console.log(newArray);
         dispatch({ type: 'SET_CARTITEM_COUNT', payload: newArray });

         return;
      }

      cartLocalstate &&
         cartLocalstate.map((item: CartItem) => {
            if (item.id === incId) {
               return {
                  item,
                  amount: item.amount--,
               };
            }
            return item;
         });

      dispatch({ type: 'SET_CARTITEM_COUNT', payload: cartLocalstate });
      localStorage.setItem('Cart', JSON.stringify(cartLocalstate));
   }

   return (
      <div>
         <p> {title} </p>
         <p> {price} </p>
         <p>{amount}</p>
         <p> {inStock}</p>

         <button onClick={decreaseHandler}>-</button>
         <button onClick={incrementHandler}>+</button>
      </div>
   );
}

const Wrapper = styled.div`
   padding: 2rem;
`;

export default CartItems;
