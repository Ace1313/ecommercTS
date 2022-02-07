import React from 'react';

function Cart() {
   const cartItems = JSON.parse(localStorage.getItem('Cart')!);

   console.log(cartItems);

   return (
      <div>
         {cartItems.map((item: any) => (
            <h1> {item.title} </h1>
         ))}
      </div>
   );
}

export default Cart;
