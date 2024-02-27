import React, {FC} from 'react';
import {HeaderLogo, HeaderNavigate} from "./index";

import style from "./Header.module.css";
const Header:FC = () => {
    return (
     <header className={style.header}>
        <div className="container">
            <div className={style.wrapper}>
                <HeaderLogo children={"Logo"}/>
                <HeaderNavigate/>
            </div>
        </div>
     </header>
  );
};

export default Header;