import { mockProducts } from '../mockProducts';
import { ProductItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';

import ProductItemCard from './ProductItemCard';

function ProductList() {
   return (
      <Wrapper>
         {mockProducts.map((item: ProductItem) => (
            <ProductItemCard key={item.id} {...item} />
         ))}
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: grid;
`;

export default ProductList;
