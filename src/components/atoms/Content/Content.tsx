import Footer from 'components/layouts/Footer';
import Navbar from 'components/layouts/Navbar';
import React from 'react';

const Content: React.FC = ({ children }) => (
  <div className="flex">
    <Navbar />
    <div className="main-container">{children}</div>
    <Footer />
  </div>
);
export default Content;
