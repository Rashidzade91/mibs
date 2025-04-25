import classes from "./index.module.css";
import platform from "../../assets/platform.png";
import decoration from "../../assets/decoration.png";
import { CgArrowBottomRight } from "react-icons/cg";
import Card from "../Card";
import { data } from "./data";

export default function About() {
  return (
    <section className={classes.about}>
      <div className="container">
        <div className="row">
          <div className={classes.about_container}>
            <div className={classes.about_title}>
              <h1>KOB İnvestisiya portalı</h1>
              <p>
                "KOB İnvest" portalı Avropa İttifaqının Avropa Qonşuluq Alətinin
                2016-cı il üzrə Azərbaycan üçün Fəaliyyət Proqramı çərçivəsində
                İqtisadiyyat Nazirliyinin benefisiarı olduğu “Kənd yerlərində
                biznes informasiya  isteminin inkişafına dəstək” texniki yardım
                layihəsinin icrası ilə əlaqədar olaraq yaradılmışdır.
              </p>
              <div className={classes.about_data}>
                <p>proqramlaşdırma</p>
                <p>vebsayt tərtibatı</p>
                <p>admin paneli qurulması</p>
                <p>ux/ui dizayn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={classes.platform}>
            <div className="img">
              <img src={platform} alt="" />
            </div>
            <div>
              <div className={classes.about_project}>
                <h2>Layihə haqqında</h2>
                <p>
                  Keçid linki:{" "}
                  <a href="http:invest.smb.gov.az">http:invest.smb.gov.az</a>
                </p>
                <p>
                  Alətlər: <span>Web dizayn</span>{" "}
                  <span>Web proqramlaşdırma</span>
                </p>
                <p>
                  Layihənin adı:  <small>KOB İnvestisiya portalı</small>
                </p>
              </div>
              <div className={classes.purpose}>
                <h2>Layihənin detalları</h2>
                <p>
                  KOBİA tərəfindən idarə edilən Portalının məqsədi ölkənin
                  investisiya cəlbediciliyini yüksəltmək və iqtisadiyyatının
                  inkişafı üçün alternativ maliyyələşmə mənbələrindən istifadə
                  imkanlarını artırmaqdır.
                </p>
                <span>
                  Portal investor axtarışı, biznes satışı, françayzinq və
                  investisiya təkliflərinin həyata keçirilməsi imkanları
                  yaratmaqdadır. Portalda İstifadəçi və admin kabineti
                  mövcuddur. İstifadəçi kabineti öz özlüyündə 2 hissəyə bölünür,
                  (investor və investisiya axtaran) admin isə sayta
                  yerləşdirilmiş elanları təsdiqləmək, imtina etmək və ya
                  düzəliş üçün geri qaytarmaq funksiyalarına malikdir.
                </span>
              </div>
              <div className={classes.feedback}>
                <div className={classes.decoration}>
                  <img src={decoration} alt="" className={classes.left} />
                </div>
                <h2>Müştəri rəyi</h2>
                <p>
                  MİB Solution ilə ilk tanışlığımız beynəlaxalq layihənin icrası
                  zamanı baş tutmuşdur. KOBİM.AZ saytı artıq mövcud idi, lakin
                  beynəlxalq layihə çərçivəsində saytın yenilənməsi və E-tədris
                  platformasının saytda yerləşdirilməsi nəzərədə tutulmuşdu.
                  Yenilənmə layihə təşkilatçısı tərəfindən MİBS-ə etibar
                  edilmişdi. Öz işlərinin öhdəsindən tam keyfiyyətlə gəldilər.
                  Bundan sonra KOB inkişaf mərkəzləri üçün elektron sənəd
                  dövriyyəsi sisteminin hazırlanmasında da MİBS-ə etibar etdik
                  və bir dəfədə əmin olduq ki, doğru seçim etmişik. MİBS
                  komandasına fəaliyyətlərində uğurlar arzu edirik!
                </p>
                <strong>KOBİM</strong>
                <p className={classes.center}>KOB İnkişaf Mərkəzi</p>
                <div className={classes.decoration1}>
                  <img src={decoration} alt="" className={classes.left} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={classes.other_project}>
            <p>Digər layihələr</p>
            <button>
              <span>Daha ətraflı</span> <CgArrowBottomRight />{" "}
            </button>
          </div>
        </div>

        <div className="row">
          <div className={classes.card_data}>
            {data.map((item) => (
              <Card {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
