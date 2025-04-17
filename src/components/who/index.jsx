import classes from "./index.module.css";

export default function Who() {
  return (
    <>
      <section className={classes.who}>
        <div className="container">
          <div className="row">
            <div className={classes.main_container}>
              <h3>
                Rəqəmsallaşma istiqamətində <br /> xidmətlər əldə edəcəyiniz
                ünvan
              </h3>
              <p>
                Biz ilk öncə, müştərini dinləyirik, başa düşürük və onun <br />{" "}
                biznesinin inkişafı üçün fərdi həll yolları yaradırıq!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.main}>
        <div className="container">
          <div className="row">
            <div className={classes.component}>
              <div>
                <a href="">Onlayn mağazalar</a>
              </div>
              <div>
                <a href="">Korporativ saytlar</a>
              </div>
              <div>
                <a href="">Veb tətbiqlər</a>
              </div>
              <div>
                <a href="">Kargo sistemləri</a>
              </div>
            </div>
            <div className="row">
              <div className={classes.information}>
                <div className={classes.item1}>
                  <h3>Üç formalaşmış qrupdan ibarət peşəkar komanda</h3>
                  <h5>
                    Komandamız əvvəllər öz sahələrində uzun müddət fərdi
                    fəaliyyət göstərmiş mütəxəssilərdən ibarətdir. Fərdi
                    fəaliyyət dövründə qeyri rəsmi komanda halında çalışmış
                    olduğumuzdan «MİB Solution» MMC-nin yaradılması və bir çətir
                    altında fəaliyyət göstərmək qərarına gələrək rəsmi komanda
                    olduq.
                  </h5>
                  <p>
                     Artıq «MİB Solution» — konada olaraq 3 formalaşmış qrupdan
                    ibarətdir. Hansı ki, vahid nöqtəyə hədəflənərək hərəkət
                    edirik. Rəqəmsal agentlikiyimizin — əməkdaşları gənc
                    olmaları ilə yanaşı öz sahələrinin peşəkarlarıdırlar. Ən
                    əsası biz işinizi sevən və istənilən mürəkkəblikdə olan
                    işlərin öhdəsindən gələn təcrübəli mütəxəssislərik.
                  </p>
                </div>
                <div className={classes.item2}>
                  <h2>
                    Əsas məqsədimiz <br /> uzunmüddətli əməkdaşlıqdır.
                  </h2>
                </div>
                <div className={classes.item3}>
                  <h4>
                    Bizim rəqəmsal agentlik 2020-ci ildə rəsmi olaraq dövlət
                    qeydiyyatına alınmışdır. Biz kəmiyyət üçün saytlar yaratmağa
                    çalışmırıq.
                  </h4>
                  <p>
                    Bizim üçün vacibdir ki, bizimlə işləmək müştəriyə qazanc
                    gətirsin və mümkün qədər müştərilərimizin işi
                    asanlaşdırılsın.
                  </p>
                </div>
                <div className={classes.item4}>
                  <h3>Əlavə podratçılar axtarmağa ehtiyac yoxdur!</h3>
                  <h5>
                    "MİB Solution" Sizin rəqəmsallaşma istiqamətində hərtərəfli
                    xidmətlər əldə edəcəyiniz ünvandır. Bütün işləri
                    mütəxəssislərimiz görəcək. Biz biznesinizə uyğun həllər
                    təklif edərək, unikal dizaynlala və ideyalarınızı həyata
                    keçirəcəyik.
                  </h5>
                  <p>
                    Ətraflı məlumat vəya bizimlə bir layihəyə başlamaq üçün
                    bizimlə əlaqə saxlayın
                  </p>
                  <div className={classes.item4_btn}>
                    <button>Müraciət et</button>
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
