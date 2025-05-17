import { Link } from "react-router-dom";
import classes from "./index.module.css";
import logo_white from '../../../assets/logo_white.svg'

export default function Footer() {
  return (
    <footer className={classes.footer_container}>
      <div className="container">
        <div className="row">
          <div className={classes.footer_section}>
            <div className={classes.img_div}>
              <img src={logo_white} alt=""/>
            </div>
            <div className={classes.footer_menu}>
              <ul>
                <li className={classes.li_head}>Xidmətlərimiz</li>
                <li>
                  <Link to="/meetUs">Biz kimik ?</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Əlaqə</Link>
                </li>
              </ul>
              <ul>
                <li className={classes.li_head}>Sosial Media</li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">İnstagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
              <ul>
                <li className={classes.li_head}>Ünvan</li>
                <li>Baki ş. Nərimanov ray., Ə.Rəcəbli 11B</li>
                <li>
                  <a href="#">info@mibs.az</a>
                </li>
                <li>
                  <a href="tel:+994554040910">+994 55 404 09 10</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={classes.footer_end}>
            <p>
              Yenilikçi texnologiyaları tətbiq etməklə keyfiyyətimizi artırırıq.
            </p>
            <p>Keyfiyyət bizim əsas göstəricimizdir.</p>
          </div>
          <div className={classes.copyright}>
            <p>
              Copyright © 2023. MIBS - Most Innovative Business Solution. Bütün
              hüquqları qorunur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
