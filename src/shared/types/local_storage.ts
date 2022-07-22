import { Product } from 'api/Items/declaration';

export type ProductLocalStorage = {
  productsStorage: [] | Product[];
  addProductInStorage: (product: Product, quantity: number) => void;
  lessProductInStorage: (product: Product, quantity: number) => void;
  removeProductStorage: (product: Product) => void;
  clearProductsStorage: () => void;
};
