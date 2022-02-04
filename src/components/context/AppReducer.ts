interface AppState {
   isLoggedIn: boolean;
}

export type AppAction = { type: 'SET_LOGGED_IN' };

export function AppReducer(state: AppState, action: AppAction) {
   switch (action.type) {
      case 'SET_LOGGED_IN':
         return {
            ...state,
            isLoggedIn: !state.isLoggedIn,
         };
      default:
         return state;
   }
}
