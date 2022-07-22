import { Product } from 'api/Items/declaration';
import { Dispatch, SetStateAction } from 'react';

export type ShoppingCart = {
  products: Product[];
};

export type ShoppingCartState = {
  shoppingCartState: ShoppingCart;
  setShoppingCartState: Dispatch<SetStateAction<ShoppingCart>>;
};
