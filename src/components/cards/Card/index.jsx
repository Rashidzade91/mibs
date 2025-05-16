import classes from './index.module.css'
import group from "../../../assets/group.png";


const Card = ({ heading, title, desc }) => {
    return (
      <div className={classes.card}>
        <div className={classes.card_head}>
          <p>{heading}</p>
          <button>
            <img src={group} alt="" />
          </button>
        </div>
        <div className={classes.card_text}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    );
  };
  
  export default Card;