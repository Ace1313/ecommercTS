import { nanoid } from 'nanoid';
import { ProductItem } from './interface/ecomerce.interface';

export const mockProducts: ProductItem[] = [
   {
      id: nanoid(),
      amount: 5,
      imageUrl: 'test1',
      description: 'Very najs stick',
      price: 1337,
   },
   {
      id: nanoid(),
      amount: 5,
      imageUrl: 'test2',
      description: 'A big tree',
      price: 170,
   },
   {
      id: nanoid(),
      amount: 5,
      imageUrl: 'test3',
      description: 'A green rubber duck',
      price: 199,
   },

   {
      id: nanoid(),
      amount: 5,
      imageUrl: 'test3',
      description: 'Some yellow leafs',
      price: 129,
   },
   {
      id: nanoid(),
      amount: 5,
      imageUrl: 'test3',
      description: 'Magic Mushroom',
      price: 599,
   },
];
