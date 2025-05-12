import { useState } from "react";
import classes from "./index.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      note: "",
    });
  };

  return (
    <>
      <main className={classes.background}>
        <form className={classes.contact_form} onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={classes.title}>
                  <h2>Əlaqə</h2>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className={classes.input_group}>
                  <input
                    placeholder="Ad"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className={classes.input_group}>
                  <input
                    placeholder="Soyad"
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className={classes.input_group}>
                  <input
                    placeholder="Əlaqə nömrəsi"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className={classes.input_group}>
                  <input
                    placeholder="E-poçt"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className={classes.input_group}>
                  <textarea
                    name="note"
                    placeholder="Qeyd"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className={classes.submit_button}>
                  Göndər
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <section className={classes.contact_frame}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={classes.text_title}>
                <h4>
                  Fikirlərinizi bölüşmək və ya sual vermək <br />
                  istəyirsinizsə, bizə zəng edin və ya e-poçt göndərin.
                </h4>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center">
              <div className={classes.contact_text}>
                <div>
                  <h4>Əlaqə nömrəsi</h4>
                  <a href="tel:+994554040910">+994 55 404 09 10</a>
                </div>
                <div>
                  <h4>E-mail</h4>
                  <a href="mailto:infomibs.az">infomibs.az</a>
                </div>
                <div>
                  <h4>Ünvan</h4>
                  <a
                    href="https://www.google.com/maps?q=Ə.+Rəcəbli+11b,+Bakı&output=embed"
                    target="_blank"
                  >
                    Bakı ş. Nərimanov ray., Ə.Rəcəbli 11B
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
              style={{ padding: "36px 0 48px" }}>
              <iframe
                className={classes.map_frame}
                src="https://www.google.com/maps?q=Ə.+Rəcəbli+11b,+Bakı&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
