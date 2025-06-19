import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'absolute',
    top: '100vh',
    width: '100%',
    backgroundColor: 'grey',  // grey background
  };

  return (
    <footer className="text-light py-3" style={footerStyle}>
      <p className="text-center m-0">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  );
};

export default Footer;
