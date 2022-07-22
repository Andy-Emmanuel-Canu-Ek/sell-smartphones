import Content from 'components/atoms/Content';
import MainLayout from 'components/layouts/MainLayout';
import AboutTemplate from 'components/templates/about/about';
import React, { ReactNode } from 'react';

const About = (): ReactNode => (
  <MainLayout>
    <Content>
      <AboutTemplate />
    </Content>
  </MainLayout>
);

export default About;
