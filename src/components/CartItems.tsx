import { useContext } from 'react';
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

   function decrementHandler() {
      const incId = id;

      if (amount === 1) {
         const newArray = cartLocalstate.filter((item: any) => item.id !== incId);

         localStorage.setItem('Cart', JSON.stringify(newArray));
         console.log(newArray);
         dispatch({ type: 'SET_CARTITEM_COUNT', payload: newArray });

         productsLocalstate.map((item: any) => {
            if (item.id === id) {
               return {
                  ...item,
                  inStock: item.inStock++,
               };
            }
            return item;
         });

         localStorage.setItem('products', JSON.stringify(productsLocalstate));

         dispatch({ type: 'SET_INIT_PRODUCTS', payload: productsLocalstate });

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
      <Wrapper>
         <img src={imageUrl} alt="product" />
         <h3> {title} </h3>
         <p> price: {price} $ </p>
         <p> amount: {amount}</p>
         <p> Instock: {inStock}</p>
         <div>
            <button onClick={decrementHandler}>-</button>
            <button onClick={incrementHandler}>+</button>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: auto;
   grid-template-rows: 1fr 1fr 1fr 1fr;
   justify-content: center;
   justify-items: center;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   background-color: #f3a683f4;
   padding: 1rem;

   button {
      width: 30px;
      height: 30px;
   }

   img {
      width: 180px;
      height: 180px;
   }
`;

export default CartItems;
