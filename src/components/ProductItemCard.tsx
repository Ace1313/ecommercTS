import React from 'react';
import { ProductItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';

function ProductItemCard({ id, amount, description, price, imageUrl }: ProductItem) {
   return (
      <Wrapper>
         <p> {description} </p>
         <p> {amount} </p>
         <p> {price} </p>
         <button>+</button>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: auto;
   grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export default ProductItemCard;
