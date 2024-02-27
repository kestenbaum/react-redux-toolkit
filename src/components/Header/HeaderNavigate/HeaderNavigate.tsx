import React from 'react';
import style from "../HeaderNavigate/HeaderNavigate.module.css";

const HeaderNavigate = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li><a href="#" className={style.link}>Posts</a></li>
                <li><a href="#" className={style.link}>Users</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNavigate;