// Layout.js
import React, { useEffect } from 'react';

const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = title || 'Argent Bank';
  }, [title]);

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
