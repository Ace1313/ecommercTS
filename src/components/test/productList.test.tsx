import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import Navbar from '../Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '../context/AppContext';
import userEvent from '@testing-library/user-event';
import { mockProducts } from '../../mockProducts';

describe('Should render products', () => {
   it('Should render without crashing', () => {
      render(
         <AppContextProvider>
            <ProductList />
         </AppContextProvider>
      );
   });

   it('Should render navbar', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <Navbar />
            </BrowserRouter>
         </AppContextProvider>
      );
   });

   it('Should display all products in store', () => {
      render(
         <AppContextProvider>
            <ProductList />
         </AppContextProvider>
      );

      const allProducts = screen.getAllByTestId('allProducts');

      expect(allProducts.length).toBe(mockProducts.length);
   });

   it('Should render a inputfield', () => {
      render(
         <AppContextProvider>
            <ProductList />
         </AppContextProvider>
      );
      const searchInput = screen.getByPlaceholderText('Search');

      expect(searchInput).toBeInTheDocument();
   });

   it('Should match input value with user input', () => {
      render(
         <AppContextProvider>
            <ProductList />
         </AppContextProvider>
      );
      const searchInput = screen.getByPlaceholderText('Search');

      userEvent.type(searchInput, 'Axe');

      expect(searchInput).toHaveValue('Axe');
   });

   it('Should display filtered products', () => {
      render(
         <AppContextProvider>
            <ProductList />
         </AppContextProvider>
      );
      const searchInput = screen.getByPlaceholderText('Search');

      userEvent.type(searchInput, 'a');

      const test = screen.getAllByTestId('allProducts');

      expect(test.length).toBe(5);
   });
});
