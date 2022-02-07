import { mockProducts } from '../mockProducts';
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
`;

export default ProductList;
