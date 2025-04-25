import classes from "./index.module.css";
import Card from "../Card";
import { mockData } from "./data";

export default function Projects() {
  return (
    <section className={classes.projects}>
      <div className="container">
        <div className="row">
          <div className={classes.projects_head}>
            <h1>
              <span>Layihənizi</span> bizə <br /> əmanət edin!
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                earum nihil autem ut suscipit aliquid.
              </p>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className={classes.main_container}>
            {mockData.map((item) => (
              <Card {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
