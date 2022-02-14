import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AppContextProvider from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

import Loggin from '../../pages/Loggin';

describe('Should render login page', () => {
   it('should render login without crashing', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <Loggin />
            </BrowserRouter>
         </AppContextProvider>
      );
   });

   it('should show button', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <Loggin />
            </BrowserRouter>
         </AppContextProvider>
      );
      const submitBtn = screen.getByRole('button', { name: 'Submit' });

      expect(submitBtn).toBeInTheDocument();
   });

   it('should match input from user', () => {
      render(
         <AppContextProvider>
            <BrowserRouter>
               <Loggin />
            </BrowserRouter>
         </AppContextProvider>
      );
      const emailInput = screen.getByLabelText('Email');

      userEvent.type(emailInput, 'rob@hotmail.com');

      expect(emailInput).toHaveValue('rob@hotmail.com');
   });
});
