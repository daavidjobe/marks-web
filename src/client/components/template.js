import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
export default (props) => {
  return (
      <div className="wrapper">
        <Header />
        {props.children}
        <Footer />
      </div>
  )
}