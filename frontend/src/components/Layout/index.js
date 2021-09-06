import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Erstell Knots | {title}</title>
        <link rel="canonical" href="https://erstellknots.com" />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
