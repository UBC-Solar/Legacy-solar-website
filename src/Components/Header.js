import React, { useState } from 'react';
import style from '../Styles/Header.module.scss';
import Button from './Button';

const Header = () => {

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={style.header}>
      <div className={style.menu_icon} onClick={() => setMenuVisible(!menuVisible)}>
        <div/>
        <div/>
      </div>
      <div>
        <img className={style.header_logo} src='logo_text.png' alt='UBC Solar'/>
        <div>
          <Button Url="https://ubcsolar.com">JOIN</Button>
          <Button Url="https://ubcsolar.com">SPONSOR</Button>
        </div>
      </div>
    </div>
  )
}

export default Header;