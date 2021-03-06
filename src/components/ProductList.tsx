import { ProductItem } from '../interface/ecomerce.interface';
import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useState } from 'react';

import ProductItemCard from './ProductItemCard';

function ProductList() {
   const { state } = useContext(AppContext);
   const productState = state.startProducts && state?.startProducts;
   const [searchProduct, setSearchProduct] = useState('');

   return (
      <Wrapper>
         <div className="searchbar">
            <input
               data-testid="search"
               onChange={(e) => setSearchProduct(e.target.value)}
               value={searchProduct}
               placeholder="Search"
               className="search"
               type="text"
            />
         </div>
         <div className="test">
            {productState
               .filter((item: any) => {
                  if (searchProduct === '') {
                     return true;
                  } else if (
                     item.title.toLowerCase().includes(searchProduct.toLowerCase())
                  ) {
                     return true;
                  }
                  return false;
               })
               .map((item: ProductItem) => (
                  <ProductItemCard key={item.id} {...item} />
               ))}
         </div>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .test {
      display: grid;
      grid-template-rows: 480px 480px 480px;
      grid-template-columns: 300px 300px 300px;
      justify-content: center;
      align-content: center;
      gap: 3rem;
      margin-top: 3rem;
      padding-top: 1rem;
   }

   .searchbar {
      display: flex;
      justify-content: center;
   }

   input {
      align-items: center;
      color: #160427;
      width: 165px;
      height: 35px;
      border-radius: 5px;
      border: none;
   }
`;

export default ProductList;
