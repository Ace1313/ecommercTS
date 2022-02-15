import { ProductItem } from '../../interface/ecomerce.interface';

interface AppState {
   isLoggedIn: boolean;
   cart: ProductItem[];
   startProducts: ProductItem[];
}

export type AppAction =
   | { type: 'SET_LOGGED_IN' }
   | { type: 'ADD_CART'; payload: any }
   | { type: 'SET_INIT_PRODUCTS'; payload: any }
   | { type: 'SET_CARTITEM_COUNT'; payload: any };

export function AppReducer(state: AppState, action: AppAction) {
   switch (action.type) {
      case 'SET_LOGGED_IN':
         return {
            ...state,
            isLoggedIn: !state.isLoggedIn,
         };
      case 'SET_INIT_PRODUCTS':
         return {
            ...state,
            startProducts: action.payload,
         };

      case 'ADD_CART':
         return {
            ...state,
            cart: [...state.cart, action.payload],
         };
      case 'SET_CARTITEM_COUNT':
         return {
            ...state,
            cart: action.payload,
         };

      default:
         return state;
   }
}
