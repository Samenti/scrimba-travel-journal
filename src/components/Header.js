import React from 'react';
import globeIcon from '../images/globe-icon.svg';

export default function Header() {
  return (
    <header className="header">
      <a href="#"><img src={globeIcon} alt="globe icon" className="header--image"/></a>
      <a href="#"><h1 className="header--title">my travel journal.</h1></a>
    </header>
  );
};