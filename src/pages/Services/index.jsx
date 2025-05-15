import { FaRegCopy } from "react-icons/fa6";
import classes from "./index.module.css";
import computer from "../../assets/computer.svg";

export default function Services() {
  return (
    <>
      <div className={classes.title}>
        <h1>Xidmətlərimiz</h1>
      </div>
      <section className={classes.services}>
        <div className="container">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <div className={classes.services_main}>
                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>
                  <div className={classes.section_data}>
                    <h2>Biznes üçün SMM xidmətləri</h2>
                    <p>
                      Sosial şəbəkələrdə brendinin populyarlığını eksponent
                      olaraq artırmaq istəyənlər üçün biz SMM təşviqi
                      xidmətlə...
                    </p>
                  </div>
                </div>
                
                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>
                  <div className={classes.section_data}>
                    <h2>Mobil tətbiqlərin hazırlanması</h2>
                    <p>
                      Əlinizdə ən çox nə tutursunuz? Statistikaya görə, orta
                      smartfon istifadəçisi gündə təxminən 3,5 sa...
                    </p>
                  </div>
                </div>
                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>
                  <div className={classes.section_data}>
                    <h2>Onlayn mağaza yaradılması</h2>
                    <p>
                      Azərbaycanda onlayn mağazanın yaradılması onlayn mağaza,
                      kataloq şəklində standart bir quruluşa mali...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className={classes.offer}>
                <p>Biz şirkətlərə müxtəlif <br /> xidmətlər təklif edirik!</p>
                <span className="d-flex d-md-none">İstənilən mövzuda layihələr icra edirik!</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame}>
          <img src={computer} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
              <div className={classes.offer}>
                <p>İstənilən mövzuda layihələr icra edirik! </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={classes.services_context}>
                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>
                  <div className={classes.section_data}>
                    <h2>Veb tətbiqlərin hazırlanması</h2>
                    <p>
                      İstənilən mürəkkəblikdə veb proqramlar hazırlayırıq. Biz
                      sizin tələblərinizə diqqət yetiririk və çevik qarşılıqlı
                      əlaqələr qurur...
                    </p>
                  </div>
                </div>
                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>
                  <div className={classes.section_data}>
                    <h2>ERP sistemlərin hazırlanması</h2>
                    <p>
                      Biznes proseslərinizin avtomatlaşdırılması, məlumat
                      bazanınız formalaşdırılması və toplanması, satış, anbar,
                      müştəri əlaqələr...
                    </p>
                  </div>
                </div>
                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>
                  <div className={classes.section_data}>
                    <h2>Korporativ vebsaytın hazırlanması</h2>
                    <p>
                      Sərfəli qiymətlərlə korporativ saytın yaradılması
                      Korporativ veb-sayt bir markanın auditoriya ilə əlaqə
                      saxlanması...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
