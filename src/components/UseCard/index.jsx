import classes from './index.module.css'
import { CgArrowBottomRight } from "react-icons/cg";



export default function UseCard({id, title, heading}) {
  return (
    <div className={classes.card_black}>
      <h1>
        <span>{id}.</span> {title}
      </h1>
      <p>{heading}</p>
      <div className={classes.card_btn}>
      <button><span>Daha ətraflı</span> <CgArrowBottomRight className={classes.icon}/>{" "}</button>
      </div>
    </div>
  );
}
