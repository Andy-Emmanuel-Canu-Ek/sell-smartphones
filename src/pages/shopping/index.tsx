import Content from 'components/atoms/Content';
import MainLayout from 'components/layouts/MainLayout';
import ShoppingCartTemplate from 'components/templates/shopping-cart';
import React, { ReactNode } from 'react';

const Shopping = (): ReactNode => (
  <MainLayout>
    <Content>
      <ShoppingCartTemplate />
    </Content>
  </MainLayout>
);

export default Shopping;
