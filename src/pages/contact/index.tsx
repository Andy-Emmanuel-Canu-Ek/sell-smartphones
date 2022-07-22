import MainLayout from 'components/layouts/MainLayout';
import React, { ReactNode } from 'react';
import ContactTemplate from 'components/templates/contact';
import Content from 'components/atoms/Content';

const Contact = (): ReactNode => (
  <MainLayout>
    <Content>
      <ContactTemplate />
    </Content>
  </MainLayout>
);

export default Contact;
