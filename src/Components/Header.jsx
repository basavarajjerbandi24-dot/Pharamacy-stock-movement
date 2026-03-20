import React from 'react'
import ltrenzlogo from '../Assets/ltrenzlogo.jpeg'
export const Header = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <img src={ltrenzlogo} alt="Lifetrenz Logo" className="logo-img" />
      </div>
      <div className="cloudnine-text">Cloudnine</div>
    </div>
  );
}

export default Header;

