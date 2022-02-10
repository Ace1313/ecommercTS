import { createContext, useReducer } from 'react';
import { AppReducer, AppAction } from './AppReducer';
import { mockProducts } from '../../mockProducts';
import { useEffect } from 'react';
import { getLocalCart } from '../utilities/helpers';

function loadProducts() {
   if (localStorage.getItem('products')) {
      return JSON.parse(localStorage.getItem('products')!);
   }
   return mockProducts;
}

console.log(getLocalCart());

const initialState = {
   isLoggedIn: false,
   startProducts: loadProducts(),
   cart: getLocalCart(),
};

interface AppContextProps {
   state: typeof initialState;
   dispatch: (action: AppAction) => void;
}

interface Props {
   children: React.ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: Props) {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   useEffect(() => {
      if (state.isLoggedIn) {
         localStorage.setItem('isLoggedIn', 'true');
      }
   }, [state]);

   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(state.startProducts));
   }, [state.startProducts]);

   return (
      <AppContext.Provider value={{ state, dispatch }}>
         {children}
      </AppContext.Provider>
   );
}

export default AppContextProvider;
