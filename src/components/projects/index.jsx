import classes from "./index.module.css";
import group from "../../assets/group.png";

const mockData = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet",
    title: "Lorem, ipsum dolor",
    desc: "Lorem, ipsum",
  },
];

export default function Projects() {
  return (
    <section className={classes.projects}>
      <div className="container">
        <div className="row">
          {mockData.map((item) => {
            return (
              <div className={classes.main_container} key={item.id}>
                <div className={classes.card}>
                  <div className={classes.card_head}>
                    <p>
                      ERP Sistemləri | Web sayt tərtibatı Web Saytın
                      təkminləşdirilməsi
                    </p>
                    <button>
                      <img src={group} alt="" />
                    </button>
                  </div>
                  <div className={classes.card_main}>
                    <h4>FEX.az</h4>
                    <p>
                      {item.title}
                    </p>
                  </div>
                </div>
                <div className={classes.card}>
                  <div className={classes.card_head}>
                    <p>Texniki dəstək | Web Saytın təkminləşdirilməsi</p>
                    <button>
                      <img src={group} alt="" />
                    </button>
                  </div>
                  <div className={classes.card_main}>
                    <h4>BTUM.EDU.az</h4>
                    <p>
                      {item.heading}
                    </p>
                  </div>
                </div>
                <div className={classes.card}>
                  <div className={classes.card_head}>
                    <p>Proqramlaşdırma | Admin panel qurulması</p>
                    <button>
                      <img src={group} alt="" />
                    </button>
                  </div>
                  <div className={classes.card_main}>
                    <h4>KOBİM.az</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <div className={classes.card}>
                  <div className={classes.card_head}>
                    <p>
                      Proqramlaşdırma | Web sayt | UI / UX Dizayn | Admin paneli
                    </p>
                    <button>
                      <img src={group} alt="" />
                    </button>
                  </div>
                  <div className={classes.card_main}>
                    <h4>KOB İnvestisiya portalı</h4>
                    <p>
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className={classes.card}>
                  <div className={classes.card_head}>
                    <p>
                      Texniki dəstək | Web sayt tərtibatı | UI / UX Dizayn |
                      Admin paneli
                    </p>
                    <button>
                      <img src={group} alt="" />
                    </button>
                  </div>
                  <div className={classes.card_main}>
                    <h4>Ombudsman Aparatı</h4>
                    <p>
                      {item.title}
                    </p>
                  </div>
                </div>
                <div className={classes.card}>
                  <div className={classes.card_head}>
                    <p>Texniki dəstək | Web Saytın təkminləşdirilməsi</p>
                    <button>
                      <img src={group} alt="" />
                    </button>
                  </div>
                  <div className={classes.card_main}>
                    <h4>SR Construction</h4>
                    <p>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
