import React from 'react';

const Container = ({ children, className = '', style = {} }) => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5%',
    width: '100%',
    ...style,
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default Container;