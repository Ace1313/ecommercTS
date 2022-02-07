import React, { useContext } from 'react';
import { CartItem, ProductItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';
import { AppContext } from './context/AppContext';

function ProductItemCard({ id, title, inStock, price, imageUrl }: ProductItem) {
   const { dispatch, state } = useContext(AppContext);

   function isInCart() {
      if (state && state.cart.find((item: any) => item.id === id)) {
         return true;
      }

      return false;
   }

   function addToCartHandler() {
      let productId = id;

      let productArray = state.startProducts;
      let cartArray = state.cart;
      const addProduct = productArray.find((item) => item.id === productId)!;

      const cartItem: CartItem = { ...addProduct, amount: 1 };

      localStorage.setItem('Cart', JSON.stringify(cartArray));

      dispatch({ type: 'ADD_CART', payload: cartItem });
   }

   return (
      <Wrapper>
         <p> {title} </p>
         <p> {inStock} </p>
         <p> {price} </p>
         <button onClick={addToCartHandler} disabled={isInCart()}>
            {isInCart() ? 'In Cart' : 'Add To Cart'}
         </button>
         {/* {toggleBtn ? (
            <button onClick={addToCartHandler}>+</button>
         ) : (
            <button disabled={true} onClick={addToCartHandler}>
               Already In cart
            </button>
         )} */}
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: auto;
   grid-template-rows: 1fr 1fr 1fr 1fr;

   button {
      width: 150px;
   }
`;

export default ProductItemCard;
