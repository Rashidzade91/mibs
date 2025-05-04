import classes from "./index.module.css";
import Card from "../Card";
import { mockData } from "./data";

export default function Projects() {
  return (
    <section className={classes.projects}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={classes.projects_head}>
              <h1>
                <span>Layihənizi</span> bizə
              </h1>
              <h2 className="d-flex">
                əmanət edin!
                <p>
                  Hazır və individual həllər verməklə özünüzə məxsus <br /> ERP
                  sistemlərinin qurulmasını təklif edirik.
                </p>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className={classes.main_container}>
              {mockData.map((item) => (
                <Card {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
