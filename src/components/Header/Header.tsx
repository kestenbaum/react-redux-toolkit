import React, {FC} from 'react';

import style from "./Header.module.css";
const Header:FC = () => {
    return (
     <header className={style.header}>
        <div className="container">
            <div className={style.wrapper}>
                Logo
            </div>
        </div>
     </header>
  );
};

export default Header;