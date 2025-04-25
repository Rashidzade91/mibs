import classes from "./index.module.css";
import logo_white from "../../assets/logo_white.svg";
import logo_black from "../../assets/logo_black.svg";
import { Link, NavLink, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const whiteRoutes = ["/who", "/services", "/development", "/home", "/", ""];
  const isWhite = whiteRoutes.includes(pathname);

  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const toggleDropdown = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={isWhite ? classes.black_header : classes.white_header}>
      <div className="container">
        <div className="row">
          <div className={classes.header_container}>
            <a href="#" className={classes.logo}>
              <img src={isWhite ? logo_white : logo_black} alt="" />
            </a>
            <nav className={classes.navbar}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/who"
              >
                Biz kimik ?
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/services"
              >
                Xidmətlər
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <button onClick={toggleDropdown}>
                <div>
                  <span className={classes.item1}></span>
                  <span className={classes.item2}></span>
                  <span className={classes.item3}></span>
                </div>
              </button>
            </nav>
            {show ? (
              <div className={classes.dropdown_links} ref={menuRef}>
                <Link to="./who">Biz kimik?</Link>
                <a href="">Filiallar</a>
                <a href="">Menyu</a>
                <a href="">Qiymətlər</a>
                <a href="">Qalereya</a>
                <div className={classes.info}>
                  <a href="#">info@anticafeconcept.com</a>
                  <a href="tel:+994518323113">+(994-51) 832-31-13</a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
