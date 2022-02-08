import { useContext, useState } from 'react';
import { AppContext } from '../components/context/AppContext';
import { CartItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';
import { getLocalCart } from './utilities/helpers';

function CartItems({ id, imageUrl, title, inStock, price, amount }: CartItem) {
   const { dispatch, state } = useContext(AppContext);
   let cartLocalstate = getLocalCart();
   let productsLocalstate = JSON.parse(localStorage.getItem('products')!);
   let productState = state && state.startProducts;

   console.log(productState);

   function incrementHandler() {
      const incId = id;

      if (inStock === 0) {
         return;
      }

      cartLocalstate &&
         cartLocalstate.map((item: CartItem) => {
            if (item.id === incId) {
               return {
                  ...item,
                  amount: item.amount++,
                  inStock: item.inStock--,
               };
            }
            return item;
         });

      productsLocalstate &&
         productsLocalstate.map((item: any) => {
            if (item.id === incId) {
               return {
                  ...item,
                  amount: item.amount++,
                  inStock: item.inStock--,
               };
            }
            return item;
         });

      dispatch({ type: 'SET_CARTITEM_COUNT', payload: cartLocalstate });
      localStorage.setItem('Cart', JSON.stringify(cartLocalstate));

      dispatch({ type: 'SET_INIT_PRODUCTS', payload: productsLocalstate });
      localStorage.setItem('products', JSON.stringify(productsLocalstate));
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
                  ...item,
                  amount: item.amount--,
                  inStock: item.inStock++,
               };
            }
            return item;
         });

      productsLocalstate &&
         productsLocalstate.map((item: any) => {
            if (item.id === incId) {
               return {
                  ...item,
                  amount: item.amount++,
                  inStock: item.inStock++,
               };
            }
            return item;
         });

      dispatch({ type: 'SET_CARTITEM_COUNT', payload: cartLocalstate });
      localStorage.setItem('Cart', JSON.stringify(cartLocalstate));

      dispatch({ type: 'SET_INIT_PRODUCTS', payload: productsLocalstate });
      localStorage.setItem('products', JSON.stringify(productsLocalstate));
   }

   return (
      <div>
         <p> {title} </p>
         <p> price: {price} </p>
         <p> amount: {amount}</p>
         <p> Instock: {inStock}</p>

         <button onClick={decreaseHandler}>-</button>
         <button onClick={incrementHandler}>+</button>
      </div>
   );
}

const Wrapper = styled.div`
   padding: 2rem;
`;

export default CartItems;
