import Content from 'components/atoms/Content';
import MainLayout from 'components/layouts/MainLayout';
import ProductTemplate from 'components/templates/products';
import React, { ReactNode } from 'react';

const Products = (): ReactNode => (
  <MainLayout>
    <Content>
      <ProductTemplate />
    </Content>
  </MainLayout>
);

export default Products;
