import { useState } from "react";
import classes from "./index.module.css";
import background from "../../assets/background.png";

export default function Portfolio() {
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
      <div className={classes.background}>
        <form className={classes.contact_form} onSubmit={handleSubmit}>
          <div className={classes.title}>
            <h2>Əlaqə</h2>
          </div>

          <div className="row">
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

          <div className="row">
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

          <div className={classes.input_group}>
            <textarea
              name="note"
              placeholder="Qeyd"
              value={formData.note}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={classes.submit_button}>
            Göndər
          </button>
        </form>
      </div>

      <div style={{ padding: "70px  0", backgroundColor: "#8398A24D" }}>
        <div className="container" style={{}}>
          <div className={classes.text_title}>
            <h4>
              Fikirlərinizi bölüşmək və ya sual vermək <br /> istəyirsinizsə,
              bizə zəng edin və ya e-poçt göndərin.
            </h4>
          </div>
          <div className={classes.map_data}>
            <div className="row">
              <div className={classes.contact_text}>
                <div>
                  <h4>Əlaqə nömrəsi</h4>
                  <a href="tel:+994554040910">+994 55 404 09 10</a>
                </div>

                <div>
                  <h4>E-mail</h4>
                  <a href="mailto:info@mibs.az">infomibs.az</a>
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
            <div className="row">
              <section>
                <iframe
                  className={classes.map_frame}
                  src="https://www.google.com/maps?q=Ə.+Rəcəbli+11b,+Bakı&output=embed"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
