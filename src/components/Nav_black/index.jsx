import classes from './index.module.css'

export default function Nav_black(props) {
  return (
    <header className={classes.container}>
        <a href="#" className={classes.logo}>
          <img src={props.name} alt="" />
        </a>
        <nav className={classes.navbar}>
          <a href="#">Biz kimik?</a>
          <a href="#">Xidmetler</a>
          <a href="#">Portfolio</a>
          <div className={classes.menu}>
            <a href="#">Menu</a>
          </div>
        </nav>
      </header>
  );
}
