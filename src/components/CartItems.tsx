import { useContext } from 'react';
import { AppContext } from '../components/context/AppContext';
import { CartItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';
import { getLocalCart } from './utilities/helpers';

function CartItems({ id, imageUrl, title, inStock, price, amount }: CartItem) {
   const { dispatch } = useContext(AppContext);
   let cartLocalstate = getLocalCart();
   let productsLocalstate = JSON.parse(localStorage.getItem('products')!);

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
         productsLocalstate.map((item: CartItem) => {
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

   function removeFromCart() {
      const incId = id;

      const newArray = cartLocalstate.filter((item: CartItem) => item.id !== incId);

      localStorage.setItem('Cart', JSON.stringify(newArray));
      dispatch({ type: 'SET_CARTITEM_COUNT', payload: newArray });

      const updatedProducts = productsLocalstate.map((item: CartItem) => {
         if (item.id === id) {
            return {
               ...item,
               inStock: item.inStock + amount,
            };
         }
         return item;
      });

      localStorage.setItem('products', JSON.stringify(updatedProducts));

      dispatch({ type: 'SET_INIT_PRODUCTS', payload: updatedProducts });

      return;
   }

   function decrementHandler() {
      const incId = id;

      if (amount === 1) {
         removeFromCart();
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
         productsLocalstate.map((item: CartItem) => {
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
         <h2> {title} </h2>
         <p> Price: {price} $ </p>
         <p> Instock: {inStock}</p>
         <div className="btns">
            <button onClick={decrementHandler}>-</button>
            <h2>{amount}</h2>
            <button onClick={incrementHandler}>+</button>
            <button onClick={() => removeFromCart()}>X</button>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: auto;
   grid-template-rows: 235px 1fr 1fr 1fr 1fr 1fr;
   justify-content: center;
   justify-items: center;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   border: 2px solid black;
   border-radius: 5px;
   background: #00b8933e;

   .btns {
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      width: 100%;
   }

   button {
      width: 85px;
      height: 32px;
      cursor: pointer;
      background: #95ebce;
      border: 1px solid whitesmoke;
      border-radius: 5px;
   }

   button:hover {
      background: whitesmoke;
      transition: ease-in-out 0.5s;
   }

   img {
      width: 296px;
      height: 100%;
      object-fit: cover;
   }
`;

export default CartItems;
