import classes from "./index.module.css";
import logo_white from "../../Photos/logo_white.svg";
import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className={classes.container}>
      <a href="#" className={classes.logo}>
        <img src={logo_white} alt="" />
      </a>
      <nav className={classes.navbar}>
        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/Biz_kimik"
        >
          Biz kimik ?
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/Xidmetler"
        >
          Xidmətlər
        </NavLink>
        <NavLink
          className={({isActive}) => (isActive ? "active" : null)}
          to="/Portfolio"
        >
          Portfolio
        </NavLink>
      </nav>
    </header>
  );
}
