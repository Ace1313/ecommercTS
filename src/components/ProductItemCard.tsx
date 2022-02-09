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

      const cartItem: CartItem = { ...addProduct, amount: 1, inStock: inStock - 1 };

      localStorage.setItem('Cart', JSON.stringify(cartArray));

      productArray.map((item: any) => {
         if (item.id === id) {
            return {
               ...item,
               inStock: item.inStock--,
            };
         }
         return item;
      });

      localStorage.setItem('products', JSON.stringify(productArray));

      dispatch({ type: 'ADD_CART', payload: cartItem });

      dispatch({ type: 'SET_INIT_PRODUCTS', payload: productArray });
   }

   return (
      <Wrapper>
         <img src={imageUrl} alt="" />
         <h3> {title} </h3>
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
   grid-template-rows: 1fr 1fr 1fr 50px;
   justify-content: center;
   justify-items: center;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

   border: 2px solid grey;
   border-radius: 5px;

   button {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      margin-bottom: 5px;
   }

   img {
      width: 296px;
      height: 185px;
   }
`;

export default ProductItemCard;
