import classes from "./index.module.css";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";

const HomeCard = ({title, description }) => {
  return (
    <div className={classes.box_container}>
      <div className={classes.card}>
        <div className={classes.img_div}>
          <img className={classes.img_front} src={Rectangle1} alt="" />
          <img className={classes.img_back} src={Rectangle2} alt="" />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
