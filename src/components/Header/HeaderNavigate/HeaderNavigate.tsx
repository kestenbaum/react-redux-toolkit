import React from 'react';
import {Link} from "react-router-dom";
import style from "../HeaderNavigate/HeaderNavigate.module.css";

const HeaderNavigate = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li><Link to="/" className={style.link}>Posts</Link></li>
                <li><Link to="/users" className={style.link}>Users</Link></li>
            </ul>
        </nav>
    );
};

export default HeaderNavigate;