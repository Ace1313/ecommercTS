import { useEffect, useContext } from 'react';
import { AppContext } from '../components/context/AppContext';

import CartItems from '../components/CartItems';

function Cart() {
   const { state } = useContext(AppContext);

   useEffect(() => {}, []);

   return (
      <div>
         {state.cart &&
            state.cart.map((item: any) => <CartItems key={item.id} {...item} />)}
      </div>
   );
}

export default Cart;
