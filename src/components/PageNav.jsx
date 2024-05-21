import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "../components/Logo";

export default function PageNav() {
  return (
    <nav className={style.nav}>
      <Logo></Logo>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
