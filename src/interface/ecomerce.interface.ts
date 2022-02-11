export interface ProductItem {
   id: string;
   inStock: number;
   imageUrl: string;
   title: string;
   price: number;
}

export interface CartItem extends ProductItem {
   amount: number;
}

export interface UserInformation {
   email: string;
   password: string;
   adress: string;
}
