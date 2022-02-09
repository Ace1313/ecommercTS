import { ProductItem } from './interface/ecomerce.interface';
import rod from './assets/rod.jpg';
import lure from './assets/lure.jpg';
import boat from './assets/boat.jpg';
import net from './assets/net.jpg';
import bag from './assets/bag.jpg';
import axe from './assets/axe.jpg';
import knife from './assets/knife.jpg';

export const mockProducts: ProductItem[] = [
   {
      id: '1',
      inStock: 10,
      imageUrl: rod,
      title: 'Very najs stick',
      price: 1337,
   },
   {
      id: '2',
      inStock: 13,
      imageUrl: lure,
      title: 'Amazing lure',
      price: 89,
   },
   {
      id: '3',
      inStock: 4,
      imageUrl: boat,
      title: 'Fishing boat',
      price: 199,
   },

   {
      id: '4',
      inStock: 34,
      imageUrl: net,
      title: 'Fishing net',
      price: 129,
   },
   {
      id: '5',
      inStock: 12,
      imageUrl: bag,
      title: 'Bag',
      price: 299,
   },
   {
      id: '6',
      inStock: 5,
      imageUrl: axe,
      title: 'Axe',
      price: 699,
   },
   {
      id: '7',
      inStock: 7,
      imageUrl: knife,
      title: 'Knife',
      price: 690,
   },
];
