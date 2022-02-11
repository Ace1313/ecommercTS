import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../../pages/Cart';
import AppContextProvider from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

const mockCart: any = [
   {
      id: '1',
      inStock: 10,
      title: 'Very najs stick',
      price: 1337,
   },
   {
      id: '2',
      inStock: 13,
      title: 'Amazing lure',
      price: 89,
   },
];

const totalSum = mockCart
   .map((price: any) => price.price)
   .reduce((prevValue: any, currentValue: any) => prevValue + currentValue);

describe('Should render cart', () => {
   it('Should render cart without crashing', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <Cart />
            </BrowserRouter>
         </AppContextProvider>
      );
   });

   it('Should show heading "nothing in cart"', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <Cart />
            </BrowserRouter>
         </AppContextProvider>
      );

      const headingElement = screen.getByRole('heading', {
         name: 'Nothing In Cart',
      });

      expect(headingElement).toBeInTheDocument();
   });

   it('Should display total sum of one product', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <ProductItemCard {...mockCart[0]} />
            </BrowserRouter>
         </AppContextProvider>
      );
      const buttonElement = screen.getByRole('button', { name: 'Add To Cart' });

      userEvent.click(buttonElement);

      render(
         <AppContextProvider>
            <BrowserRouter>
               <Cart />
            </BrowserRouter>
         </AppContextProvider>
      );

      const headingElement = screen.getByRole('heading', { name: /Total: 1337/i });

      expect(headingElement).toHaveTextContent('Total: 1337');
   });

   it('Should display total sum of more than 1 product', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <ProductItemCard {...mockCart[0]} />
            </BrowserRouter>
         </AppContextProvider>
      );
      const buttonElement = screen.getByRole('button', { name: 'Add To Cart' });
      userEvent.click(buttonElement);

      render(
         <AppContextProvider>
            <BrowserRouter>
               <ProductItemCard {...mockCart[1]} />
            </BrowserRouter>
         </AppContextProvider>
      );

      const btnEle = screen.getByRole('button', { name: 'Add To Cart' });
      userEvent.click(btnEle);

      render(
         <AppContextProvider>
            <BrowserRouter>
               <Cart />
            </BrowserRouter>
         </AppContextProvider>
      );

      expect(totalSum).toEqual(+'1426');
   });
});
