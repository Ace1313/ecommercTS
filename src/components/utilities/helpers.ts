export function getLocalCart() {
   if (localStorage.getItem('Cart')) {
      return JSON.parse(localStorage.getItem('Cart')!);
   }
   return [];
}
