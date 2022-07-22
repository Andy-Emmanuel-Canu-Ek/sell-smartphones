import { FC } from 'react';
import { ShoppingCartContext, ShoppingCartProvider } from './ShoppingCartContext';

export const BaseContext: FC = ({ children }) => <ShoppingCartProvider>{children}</ShoppingCartProvider>;
