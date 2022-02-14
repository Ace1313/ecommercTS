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
      <Wrapper data-testid="allProducts">
         <img src={imageUrl} alt="" />
         <h3> {title} </h3>
         <p> Instock: {inStock} </p>
         <p> Price: {price} $ </p>
         <button
            data-testid="button-add"
            onClick={addToCartHandler}
            disabled={isInCart()}
         >
            {isInCart() ? 'In Cart' : 'Add To Cart'}
         </button>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: auto;
   grid-template-rows: 235px 1fr 1fr 1fr 1fr;
   justify-content: center;
   justify-items: center;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   background: #00b89352;
   border: 2px solid black;
   border-radius: 5px;

   button {
      width: 100%;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      background: #95ebce;
      font-size: 15px;
      font-weight: bolder;
   }

   button:hover {
      background: #9cebff;
      transition: ease-in-out 0.5s;
   }
   button:disabled {
      background: #3c5a50;
      color: whitesmoke;
   }

   img {
      width: 296px;

      height: 100%;
      object-fit: cover;
   }
`;

export default ProductItemCard;
