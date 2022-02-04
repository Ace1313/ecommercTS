import React from 'react';
import { mockProducts } from '../mockProducts';
import { ProductItem } from '../interface/ecomerce.interface';

import ProductItemCard from './ProductItemCard';

function ProductList() {
   return (
      <div>
         {mockProducts.map((item: ProductItem) => (
            <ProductItemCard key={item.id} {...item} />
         ))}
      </div>
   );
}

export default ProductList;
