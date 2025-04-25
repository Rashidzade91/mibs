import { FaRegCopy } from "react-icons/fa6";
import classes from "./index.module.css";
import computer from "../../assets/computer.svg";

export default function Services() {
  return (
    <>
          <div className={classes.title}>
          <h1 style={{ textIndent: "150px" }}>Xidmətlərimiz</h1>
          </div>
      <section className={classes.services}>

        <div className="container">
          <div className="row">
            <div className={classes.services_container}>
              <div className={classes.services_main}>

                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>

                  <div className={classes.section_data}>
                    <h3>Biznes üçün SMM xidmətləri</h3>
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
                    <h3>Mobil tətbiqlərin hazırlanması</h3>
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
                    <h3>Onlayn mağaza yaradılması</h3>
                    <p>
                      Azərbaycanda onlayn mağazanın yaradılması onlayn mağaza,
                      kataloq şəklində standart bir quruluşa mali...
                    </p>
                  </div>
                </div>

              </div>

              <div className={classes.offer}>
                <h2>Biz şirkətlərə müxtəlif xidmətlər təklif edirik!</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.frame}>
          <img src={computer} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className={classes.services_container}>

              <div className={classes.offer}>
                <h2>İstənilən mövzuda layihələr icra edirik! </h2>
              </div>

              <div className={classes.services_context}>

                <div className={classes.section}>
                  <div className={classes.section_icon}>
                    <span>
                      <FaRegCopy className={classes.icon} />
                    </span>
                  </div>
                  <div className={classes.section_data}>
                    <h3>Veb tətbiqlərin hazırlanması</h3>
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
                    <h3>ERP sistemlərin hazırlanması</h3>
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
                    <h3>Korporativ vebsaytın hazırlanması</h3>
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
