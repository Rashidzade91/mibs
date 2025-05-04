import classes from "./index.module.css";
import { AiFillCaretRight } from "react-icons/ai";
import phone from "../../assets/phone.png";
import game from "../../assets/interface.png";

export default function Development() {
  return (
    <>
      <div className={classes.title}>
        <h1>Onlayn Mağaza Yaradılması</h1>
      </div>
      <section className={classes.store}>
        <div className="container">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <div className={classes.store_container}>
              <h3>
                Biznesinizi genişləndirmək üçün açar təslim onlayn mağaza
                inkişaf xidmətini təklif edir.
              </h3>
              <p>
                Studiyamız müştərilərin maraqlarına diqqət yetirməklə işləyir.
                Buna görə də vaxtı, dəyəri və nəticələri nəzərə alırıq. Biz qısa
                müddət ərzində ən sərfəli qiymətlərlə onlayn mağaza hazır edirik
                ki, siz gecikmədən sifarişlərə başlaya və qəbul edə biləsiniz.
              </p>
              <p>
                Bizdən onlayn mağaza sifariş etsəniz, bu o demək deyil ki,
                alıcılar sizə çay kimi axacaq. Hər bir obyektin gücləndirilmiş
                təşviqə ehtiyacı olduğunu başa düşməyə dəyər. Ancaq onlayn
                mağazanın peşəkar inkişafı onu daha effektiv təbliğ etməyə və
                sonrakı marketinq fəaliyyətləri üçün yüksək keyfiyyətli əsas
                təmin etməyə imkan verəcəkdir.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className={classes.video_container}>
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className={classes.user_container}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <p>
                Mağaza xarakterik olaraq təşkilatın əhval-ruhiyyəsini əks
                etdirməlidir, lakin asan başa düşülməsi üçün məzmunun qısa
                tərtibinə malik olmalıdır. Biz istifadəçiləri cəlb edən və
                çətinlik yaratmayan şablondan istifadə edirik. Lazımsız
                elementlər, sadə və əlçatan bir sxem yoxdur.
              </p>
              <p>
                Məhsulların aydın göründüyü bir onlayn mağaza hazırlamaq
                lazımdır. Uğurlu təqdimat qərar qəbul etməyə müsbət təsir
                göstərir. Biz hər şeyi yığcam şəkildə yerləşdiririk ki,
                fotoşəkillər diqqəti cəlb etsin və diqqəti cəlb etsin.
              </p>
              <p>
                Əməliyyatların sürəti işləmək üçün vacibdir. Ziyarətçiyə
                səhifələr arasında keçidlər, şəkillərin açılması və kliklərin
                işlənməsi üçün çox gözləmək lazım deyil. Bunun üçün biz
                müştərilərə Ukraynada ən yaxşı serverlərdə öz onlayn
                mağazalarını yaratmağı təklif edirik. Ani reaksiyalar üçün bütün
                modulları və funksiyaları konfiqurasiya edirik.
              </p>
            </div>
          </div>
          <div className={classes.card_container}>
            <h2>İT şirkətimizlə əməkdaşlığa daxil olan fəaliyyətlərimiz</h2>
              <div className={classes.offers}>
              <div>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  layihənin və onun perspektivlərinin təhlili
                </p>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  unikal premium dizaynın yaradılması;
                </p>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  endirimlər, cari təkliflər və tədbirlər haqqında məlumat almaq
                  üçün saytda qeydiyyatdan keçmək üçün şəxsi hesabın tətbiqi.
                </p>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  üstünlükləriniz nəzərə alınmaqla texniki spesifikasiyaların
                  formalaşdırılması;
                </p>
              </div>
              <div>
                <img src={phone} alt="Phone" className="w-100" />
              </div>
            </div>
              <div className={`${classes.offers} ${classes.same}`}>
              <div>
                <img src={game} alt="Game" className="w-100"/>
              </div>
              <div className={classes.list}>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  layihənin və onun perspektivlərinin təhlili
                </p>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  unikal premium dizaynın yaradılması;
                </p>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  endirimlər, cari təkliflər və tədbirlər haqqında məlumat almaq
                  üçün saytda qeydiyyatdan keçmək üçün şəxsi hesabın tətbiqi.
                </p>
                <p>
                  <AiFillCaretRight className={classes.icon} />
                  üstünlükləriniz nəzərə alınmaqla texniki spesifikasiyaların
                  formalaşdırılması;
                </p>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
