import React, { useEffect } from 'react';

const Title = ({ children, title }) => {
  useEffect(() => {
    document.title = title || 'Argent Bank';
  }, [title]);

  return (
    <div>
      {children}
    </div>
  );
};

export default Title;
