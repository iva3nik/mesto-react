import React from 'react';
import headerLogo from '../images/vector.svg';

function Header() {
  return (
    <header className="header page__center">
      <img
        src={headerLogo}
        alt="Лого Место России"
        className="header__logo"
      />
    </header>
  )
};

export default Header;
