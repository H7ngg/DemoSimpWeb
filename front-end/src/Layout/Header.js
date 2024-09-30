import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Header.css';

const NAV_ITEM_CLASSES = 'nav-item';
const ICON_CLASSES = 'nav-item-icon';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="header-container dark">
      <div className="flex items-center space-x-2">
        <span className="logo-text dark">POPULAR PERSON</span>
        <img src="https://openui.fly.dev/openui/24x24.svg?text=🎯" alt="logo" className="logo-icon" />
      </div>
      <span className="subtitle-text dark">Where to find out more about well-known individuals</span>

      <nav className="nav">
        <NavItem iconText="🏠" text="HOME" onClick={() => handleNavigation('/')} />
        <NavItem iconText="📷" text="ACHIEVEMENT" onClick={() => handleNavigation('/achievement')} />
        <NavItem iconText="👤" text="SCIENTIST" onClick={() => handleNavigation('/scientist')} />
        <DropdownNavItem iconText="✉️" text="NobelPrize">
          <DropdownItem text="The Nobel Prize in Physics" onClick={() => handleNavigation('/nobelprize/1')} />
          <DropdownItem text="The Nobel Prize in Chemistry" onClick={() => handleNavigation('/nobelprize/2')} />
        </DropdownNavItem>
        <NavItem iconText="🛠" text="Category" onClick={() => handleNavigation('/category')} />
      </nav>
    </div>
  );
};

const NavItem = ({ iconText, text, onClick }) => {
  return (
    <button onClick={onClick} className={`${NAV_ITEM_CLASSES} dark`}>
      <img src={`https://openui.fly.dev/openui/24x24.svg?text=${iconText}`} alt={text} className={ICON_CLASSES} />
      <span className="nav-item-text">{text}</span>
    </button>
  );
};

const DropdownNavItem = ({ iconText, text, children }) => {
  return (
    <div className="dropdown">
      <button className={`${NAV_ITEM_CLASSES} dark`}>
        <img src={`https://openui.fly.dev/openui/24x24.svg?text=${iconText}`} alt={text} className={ICON_CLASSES} />
        <span className="nav-item-text">{text}</span>
      </button>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  );
};

const DropdownItem = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="dropdown-item">
      {text}
    </button>
  );
};

export default Header;
