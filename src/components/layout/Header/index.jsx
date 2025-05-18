import classes from "./index.module.css";
import logo_white from "../../../assets/logo_white.svg";
import logo_black from "../../../assets/logo_black.svg";
import { Link, NavLink, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const blackHeaderRouters = [
    "/meetUs",
    "/services",
    "/development",
    "/home",
    "/",
    "",
  ];
  const isBlack = blackHeaderRouters.includes(pathname);

  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleDropdown = () => {
    setShow(!show);
  };

  const handleLinkClick = () => {
    setShow(false); // Menyunu bağlayır
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 576;

  return (
    <header className={isBlack ? classes.black_header : classes.white_header}>
      <div className="container">
        <div className="row">
          <div className={classes.header_container}>
            <a href="/home" className={classes.logo}>
              <img src={isBlack || isMobile ? logo_white : logo_black} alt="" />
            </a>
            <nav className={classes.navbar}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/meetUs"
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
                to="/about"
              >
                Portfolio
              </NavLink>
              <button onClick={toggleDropdown} ref={buttonRef}>
                <span className={classes.item1}></span>
                <span className={classes.item2}></span>
                <span className={classes.item3}></span>
              </button>
            </nav>
            {show ? (
              <div
                className={`${classes.dropdown_links} ${show ? "active" : ""}`}
                ref={menuRef}
              >
                <Link to="./meetUs" onClick={handleLinkClick}>Biz kimik?</Link>
                <a href="">Filiallar</a>
                <a href="">Menyu</a>
                <a href="">Qiymətlər</a>
                <a href="/projects">Layihələrimiz</a>
                <a href="/development">Fəaliyyətlərimiz</a>
                <a href="/services">Xidmətlərimiz</a>
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
