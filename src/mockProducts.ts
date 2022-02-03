import { nanoid } from 'nanoid';
import { EcomerceItem } from './interface/ecomerce.interface';

export const mockProducts: EcomerceItem[] = [
   {
      id: nanoid(),
      amount: 5,
      imageUrl: 'test',
      description: 'Very najs stick',
   },
];
