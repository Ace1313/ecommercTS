import { nanoid } from 'nanoid';
import { ProductItem } from './interface/ecomerce.interface';

export const mockProducts: ProductItem[] = [
   {
      id: nanoid(),
      inStock: 50,
      imageUrl: 'test1',
      title: 'Very najs stick',
      price: 1337,
   },
   {
      id: nanoid(),
      inStock: 13,
      imageUrl: 'test2',
      title: 'A big tree',
      price: 170,
   },
   {
      id: nanoid(),
      inStock: 4,
      imageUrl: 'test3',
      title: 'A green rubber duck',
      price: 199,
   },

   {
      id: nanoid(),
      inStock: 34,
      imageUrl: 'test3',
      title: 'Some yellow leafs',
      price: 129,
   },
   {
      id: nanoid(),
      inStock: 12,
      imageUrl: 'test3',
      title: 'Magic Mushroom',
      price: 599,
   },
];
