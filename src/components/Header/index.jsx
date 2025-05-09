import classes from "./index.module.css";
import logo_white from "../../assets/logo_white.svg";
import logo_black from "../../assets/logo_black.svg";
import { Link, NavLink, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const blackHeaderRouters = ["/who", "/services", "/development", "/home", "/", ""];
  const isBlack = blackHeaderRouters.includes(pathname);
  
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
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


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 576;
  
  return (
    <header className={isBlack ? classes.black_header : classes.white_header}>
      <div className="container">
        <div className="row">
          <div className={classes.header_container}>
            <a href="#" className={classes.logo}>
              <img src={isBlack || isMobile ? logo_white : logo_black} alt="" />
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
                to="/contact"
              >
                Portfolio
              </NavLink>
              <button onClick={toggleDropdown}>
                <span className={classes.item1}></span>
                <span className={classes.item2}></span>
                <span className={classes.item3}></span>
              </button>
            </nav>
            {show ? (
              <div className={`${classes.dropdown_links} ${show ? "active" : ""}`} ref={menuRef}>
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
