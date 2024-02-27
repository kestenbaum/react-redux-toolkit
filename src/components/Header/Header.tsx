import React, {FC} from 'react';

import style from "./Header.module.css";
import HeaderNavigate from "./HeaderNavigate/HeaderNavigate";
const Header:FC = () => {
    return (
     <header className={style.header}>
        <div className="container">
            <div className={style.wrapper}>
                Logo
                <HeaderNavigate/>
            </div>
        </div>
     </header>
  );
};

export default Header;