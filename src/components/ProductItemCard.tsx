import React, { useContext, useEffect } from 'react';
import { CartItem, ProductItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';
import { AppContext } from './context/AppContext';

function ProductItemCard({ id, title, price, imageUrl }: ProductItem) {
   const { dispatch, state } = useContext(AppContext);

   function isInCart() {
      return state.cart.find((item: any) => item.id === id);
   }

   useEffect(() => {
      localStorage.setItem('Cart', JSON.stringify(state.cart));
   }, [state.cart]);

   const { inStock } =
      state &&
      state.startProducts &&
      state.startProducts.find((product: any) => product.id === id);

   function addToCartHandler() {
      let productId = id;

      let productArray = state.startProducts;
      let cartArray = state.cart;
      const addProduct = productArray.find((item: any) => item.id === productId)!;

      const cartItem: CartItem = { ...addProduct, amount: 1 };

      localStorage.setItem('Cart', JSON.stringify(cartArray));
      dispatch({ type: 'ADD_CART', payload: cartItem });
   }

   return (
      <Wrapper>
         <h3> {title} </h3>
         <img src={imageUrl} alt="" />
         <p> Instock: {inStock} </p>
         <p> Price: {price} $ </p>
         <button onClick={addToCartHandler} disabled={isInCart()}>
            {isInCart() ? 'In Cart' : 'Add To Cart'}
         </button>
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
   background-color: #848a8494;
   padding: 1rem;

   button {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
   }

   img {
      width: 180px;
      height: 180px;
   }
`;

export default ProductItemCard;
