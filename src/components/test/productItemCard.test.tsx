import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductItemCard from '../ProductItemCard';
import { mockProducts } from '../../mockProducts';
import AppContextProvider from '../context/AppContext';

describe('Login page shows', () => {
   it('Should render without crashing', () => {
      render(
         <AppContextProvider>
            <ProductItemCard {...mockProducts[0]} />
         </AppContextProvider>
      );
   });

   it('Should show button with "add to cart"', () => {
      render(
         <AppContextProvider>
            <ProductItemCard {...mockProducts[0]} />
         </AppContextProvider>
      );
      const buttonEle = screen.getByRole('button', { name: /add to cart/i });
      expect(buttonEle).toBeInTheDocument();
   });

   it('Should show button with text "in cart"', () => {
      render(
         <AppContextProvider>
            <ProductItemCard {...mockProducts[0]} />
         </AppContextProvider>
      );
      const buttonEle = screen.getByRole('button', { name: /Add to cart/i });

      userEvent.click(buttonEle);

      expect(buttonEle).toHaveTextContent('In Cart');
   });

   it('Should show Instock paragraph', () => {
      render(
         <AppContextProvider>
            <ProductItemCard {...mockProducts[0]} />
         </AppContextProvider>
      );

      const testEle = screen.getByText(/Instock/i);

      expect(testEle).toBeInTheDocument();
   });

   //   it('Should add a product', () => {
   //      render(
   //         <AppContextProvider>
   //            <ProductItemCard {...mockProducts[0]} />
   //         </AppContextProvider>
   //      );
   //      const buttonEle = screen.getByRole('button', { name: /Add to cart/i });

   //      userEvent.click(buttonEle);

   //      expect(buttonEle).toHaveTextContent('');
   //   });
});
