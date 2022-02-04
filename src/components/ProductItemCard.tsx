import React from 'react';
import { ProductItem } from '../interface/ecomerce.interface';

function ProductItemCard({ id, amount, description, price, imageUrl }: ProductItem) {
   return (
      <div>
         <p> {description} </p>
      </div>
   );
}

export default ProductItemCard;
