import HomeCard from "../HomeCard";
import { homeData } from "./homeData";
import classes from "./index.module.css";
import { CgArrowBottomRight } from "react-icons/cg";
import { useCard } from "../UseCard/data";
import UseCard from "../UseCard";
import kobia from "../../assets/kobia.png";
import construction from "../../assets/construction.png";
import Group from "../../assets/Group.png";
import FrameS from "../../assets/FrameS.png";
import FrameC from "../../assets/FrameC.png";
import FrameQ from "../../assets/FrameQ.png";
import FrameM from "../../assets/FrameM.png";
import FrameL from "../../assets/FrameL.png";
import FrameB from "../../assets/FrameB.png";
import img_main from "../../assets/img_main.png";
import abma from "../../assets/abma.png";
import auditor from "../../assets/auditor.png";
import kargo from "../../assets/kargo.png";
import kobia1 from "../../assets/kobia1.png";
import cdek from "../../assets/cdek.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className={classes.home}>
        <div className={classes.home_title}>
          <div className="container">
            <div className={classes.home_about}>
              <div>
                <h1>Rəqəmsal dünya üçün innovativ həllər</h1>
              </div>
              <div className={classes.home_btn}>
                <p>
                  Biz istənilən mövzuda və mürəkkəblikdə layihələr icra edirik!
                  Veb-saytlar yaradır və digər rəqəmsal həllər təklif edirik!
                </p>
                <button>
                  <span>Daha ətraflı</span>{" "}
                  <CgArrowBottomRight className={classes.icon} />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className={classes.home_container}>
              <div className={classes.home_main}>
                <p>
                  Əsas məqsədimiz uzunmüddətli əməkdaşlıqdır. Bu səbəbdən biz
                  kəmiyyət üçün sayt yaratmağa çalışmırıq. Bizim üçün vacibdir
                  ki, bizimlə işləmək müştəriyə qazanc gətirsin və mümkün qədər
                  müştərilərimiz işi asanlaşdırılsın.
                </p>
                <h1>Brendinizi bizim komandaya əmanət edin!</h1>
              </div>
              {homeData.map((item) => (
                <HomeCard {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={classes.card_selected}>
        <div className="container">
          <div className="row">
            <div className={classes.useCard_title}>
              <div>
                <p>Biz nə edirik?</p>
                <span>Xidmətlərimiz</span>
              </div>
              <div>
                <p className={classes.theme}>
                  Biz istənilən mövzuda və mürəkkəblikdə layihələr icra <br />{" "}
                  edirik. Veb-saytlar yaradır və digər rəqəmsal həllər <br />{" "}
                  təklif edirik!
                </p>
              </div>
            </div>

            <div className={classes.useCard}>
              {useCard.map((item) => (
                <UseCard {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={classes.construction}>
        <div className="container">
          <div className="row">
            <div>
              <div className={classes.construction_title}>
                <div>
                  <h4>İndiyə qədər nə etmişik?</h4>
                  <p>Hər bir layihə üçün individual yanaşıb, layihəyə </p>
                  <p>uyğun texnologiyalardan istifadə edilir.</p>
                </div>
                <div className="d-none d-lg-block">
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p className={classes.more}>Daha çoxu</p>
                </div>
              </div>

              <div className={classes.card_construction}>
                <div className={classes.gradient}>
                  <h3>Hər hansı layihəniz varmı? </h3>
                  <span>Formu tərtib edib bizə müraciət edin.</span>
                  <p>
                    Biz açıq ünsiyyət tərəfdarıyıq! Əgər layihəsiz barədə
                    ətraflı təsvir varsa, formanı tərtib edin. Biz qeyri- mümkün
                    olanı mümkünə çeviririk. Fikirlərinizi bölüşmək və ya bizə
                    sual vermək istəyirsinizsə, bizə zəng edin və ya bizə e-poçt
                    göndərin..
                  </p>
                  <button>Müraciət et</button>
                </div>

                <div>
                  <div className={classes.img_div}>
                    <img src={construction} alt="" />
                  </div>

                  <div className={classes.info_card}>
                    <p>
                      Tikinti layihələri ilə virtual tanışlıq, mənzil seçimi,
                      layihələrlə görüntü ilə tanışlıq.
                    </p>
                    <div className={classes.card_footer}>
                      <p>SR Construction</p>
                      <button>
                        Ətraflı oxu
                        <img src={Group} alt="" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={classes.img_div}>
                    <img src={kobia} alt="" />
                  </div>

                  <div className={classes.info_card}>
                    <p>
                      İnvestor axtarışı, françayzinq investisiya təkliflərinin
                      həyata keçirilməsi.
                    </p>
                    <div className={classes.card_footer}>
                      <p>KOB İnvestisiya Portalı</p>
                      <button>
                        Ətraflı oxu
                        <img src={Group} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.more_btn} col-lg-6 d-lg-none`}>
                <p className={classes.more}>Daha çoxu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.it_texno}>
        <div className="container">
          <div className="row">
            <div className={classes.texnology}>
              <h3>Texnologiyalarımız</h3>
              <p>Müasir texnologiyalardan istifadə etmək işimizin</p>
              <p>əsas prinsipidir.</p>
            </div>
            <Slider {...settings}>
              <div>
                <img src={FrameS} alt="" />
              </div>
              <div>
                <img src={FrameC} alt="" />
              </div>
              <div>
                <img src={FrameQ} alt="" />
              </div>
              <div>
                <img src={FrameM} alt="" />
              </div>
              <div>
                <img src={FrameL} alt="" />
              </div>
              <div>
                <img src={FrameB} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className={classes.it_services}>
        <div className="container">
          <div className="row">
            <div className={classes.it_title}>
              <h4>Ən yaxşı IT Xidməti</h4>
              <p>Hər bir biznes sahəsi üçün</p>
            </div>

            <div className={classes.it_list}>
              <p>Turizm</p>
              <p>E-ticarət</p>
              <p>Sağlamliq və Fitnes</p>
              <p>Təhsil</p>
              <p>Qida & İçki</p>
              <p>Maliyyə & Bank</p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.quality}>
        <div className="container">
          <div className="row">
            <div className={classes.quality_title}>
              <div>
                <h4>Statistikamız keyfiyyətimizin göstəricisidir.</h4>
                <p>
                  Bir neçə il ərzində gördüyümüz işlərlə bizə müraciət edən{" "}
                </p>
                <p>müştərilərimizi məmnun etməyi bacardıq.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={classes.section}>
            <div className={classes.card_text}>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>İcra etdiyimiz layihə sayı</h3>
                  <p>
                    Bu illər ərzində 80-dən çox layihə yerinə yetirərək bazarda
                    dəyərimizə dəyər qatdıq, yüksək keyfiyyətli işlərimizlə daha
                    çox tanınmağa səbəb olduq.
                  </p>
                </div>
              </div>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>İstifadə edilmiş kod sətri</h3>
                  <p>
                    Bu günə qədər icra etdiyimiz layihələr üçün ümumilikdə 793-a
                    yaxın kod sətri istifadə edilib, bu da işimizin kəmiyyət
                    göstəricisi olaraq yüksək bir rəqəmdir.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.card_text}>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>Məmnun müştəri sayı</h3>
                  <p>
                    Brendini bizə əmanət edən 60-dan çox müştərinin bizdən
                    məmnun şəkildə ayrılması üçün əlimizdən gələnin ən yaxşısını
                    etməyə diqqət göstərdik.
                  </p>
                </div>
              </div>
              <div className={classes.quality_card}>
                <div className={classes.section_icon}>
                  <span>
                    <FaArrowTrendUp className={classes.icon} />
                  </span>
                </div>
                <div className={classes.section_data}>
                  <h3>Bu işlərə gedən zaman</h3>
                  <p>
                    Rəqəmsal agentlik olaraq keyfiyyətcə yüksək layihələrimizlə,
                    onlarla məmnun müştərilərimizlə 5 il ərzində tanınan
                    şirkətlərdən biri olmağı bacardıq.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={img_main} alt="" className="w-100" />
        </div>
      </section>

      <section className={classes.it_texno}>
            <div className="container">
              <div className="row">
                <div className={classes.texnology}>
                  <h3>Müştərilərimiz</h3>
                  <p>Bizə müraciət edən müştərilərimizi bizdən məmnun</p>
                  <p>şəkildə ayrılmaları əsas prinspimizdir.</p>
                </div>
                <Slider {...settings}>
                  <div>
                    <img src={abma} alt="" />
                  </div>
                  <div>
                    <img src={auditor} alt="" />
                  </div>
                  <div>
                    <img src={kargo} alt="" />
                  </div>
                  <div>
                    <img src={kobia1} alt="" />
                  </div>
                  <div>
                    <img src={cdek} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
      </section>
    </>
  );
}
