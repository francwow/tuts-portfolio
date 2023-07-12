import { Link } from "react-router-dom";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Social from "./Social";

type Work = {
  deskTop: boolean;
  setLanguage: (value: string) => void;
  setNavActive: (value: boolean) => void;
};

const Contact = ({ deskTop, setLanguage, setNavActive }: Work) => {
  return (
    <div className="main-wrapper">
      <div className="contact-wrapper">
        <MobileNav deskTop={deskTop} setNavActive={setNavActive} />
        <Header setNavActive={setNavActive} />
        <div className="content-container">
          <div className="contact-info-wrapper">
            <div className="contact-copy">
              <h2>¡Trabajemos juntos!</h2>
              <p>
                Siempre estoy en busca de nuevos proyectos que me reten y me
                permitan encontrar momentos bellos por medio de mi cámara.
                <br></br>
                Si quieres trabajar conmigo o si tienes alguna inquietud no
                dudes en contactarme por cualquiera de estos medios.
              </p>
            </div>
            <div className="contact-info">
              <p>
                <strong>whatsapp: </strong>
                <Link to={"https://web.whatsapp.com/"}>+57 3132105286</Link>
              </p>
              <p>
                <strong>correo: </strong>
                <Link to={"mailto:francwow06@gmail.com"}>
                  francwow06gmail.com
                </Link>
              </p>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
