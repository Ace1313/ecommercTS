import { ProductItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

import ProductItemCard from './ProductItemCard';

function ProductList() {
   const { state } = useContext(AppContext);
   const productState = state.startProducts && state?.startProducts;

   return (
      <Wrapper>
         {productState.map((item: ProductItem) => (
            <ProductItemCard key={item.id} {...item} />
         ))}
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
   grid-template-rows: 320px 320px 320px;
   grid-template-columns: 300px 300px 300px;
   justify-content: center;
   align-content: center;
   gap: 3rem;
   margin-top: 3rem;
   padding-top: 1rem;
`;

export default ProductList;
