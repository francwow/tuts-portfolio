import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Header from "./Header";
import MobileNav from "./MobileNav";
import img3 from "../assets/webpImages/img3.webp";

type About = {
  deskTop: boolean;
  setLanguage: (value: string) => void;
  setNavActive: (value: boolean) => void;
};

const About = ({ deskTop, setLanguage, setNavActive }: About) => {
  const { ref: aboutDesc, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="main-wrapper">
      <div className="about-wrapper">
        <MobileNav deskTop={deskTop} setNavActive={setNavActive} />
        <Header setNavActive={setNavActive} />
        <div className="content-container">
          <div className="about-content-wrapper">
            <div className="about-content-container">
              <div className="about-hero-container">
                <div className="about-heading">
                  <h2>
                    David Tuta es un fotógrafo y creador de experiencias
                    audiovisuales colombiano, actualmente vive en Bogotá,
                    Colombia.
                  </h2>
                </div>
                <div className="about-hero-img">
                  <img src={img3} alt="David Tuta" />
                </div>
              </div>
              <div ref={aboutDesc} className={"about-content"}>
                <p
                  className={
                    descInView
                      ? "about-description in-view"
                      : "about-description"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque mattis sem eget enim pretium, eget blandit velit
                  accumsan. Vivamus efficitur augue diam. Fusce in finibus sem.
                  Pellentesque auctor ipsum quis elit vestibulum faucibus.
                  Suspendisse sit amet ipsum a elit elementum eleifend.
                  Curabitur mattis nisl erat, at aliquet ligula tincidunt eget.
                  Cras varius ipsum a magna vestibulum, at vulputate magna
                  tincidunt.
                  <br />
                  <br />
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Sed luctus fermentum
                  tellus. Etiam sagittis urna et justo consectetur, et posuere
                  lacus euismod. In vitae nisi et felis pulvinar convallis.
                  Morbi et diam pellentesque erat consectetur egestas nec
                  rhoncus turpis. Proin maximus vel justo a gravida. Aliquam a
                  sollicitudin magna. Aliquam mattis rhoncus diam id suscipit.
                  Cras a nulla lacus. Nullam at erat ut augue vulputate luctus
                  nec eget odio. Aliquam id sapien nunc. Curabitur non
                  vestibulum justo. Sed vestibulum ex nec magna consequat, eu
                  euismod arcu commodo. Vestibulum quis faucibus risus. Sed
                  sagittis sapien condimentum pulvinar semper. Nulla molestie mi
                  quis condimentum luctus. Integer nisi orci, lobortis aliquam
                  sapien a, venenatis vulputate tellus.
                  <br />
                  <br />
                  In fermentum, magna in dignissim elementum, nisi nisi bibendum
                  magna, id tristique sapien orci at nibh. Nullam vulputate
                  sodales augue. Sed in est at dui hendrerit aliquam. Vestibulum
                  cursus eget magna eu pulvinar. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque quis lorem urna. Ut
                  aliquet cursus volutpat. Sed sollicitudin vestibulum mauris,
                  nec viverra purus. Cras malesuada pellentesque eros, sed
                  feugiat libero mollis in. Integer dictum lectus nec convallis
                  bibendum. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.
                  <br />
                  <br />
                  In mattis vitae arcu sit amet faucibus. Praesent pellentesque
                  euismod accumsan. Integer sagittis lobortis nunc, et hendrerit
                  quam luctus eget. Phasellus tincidunt tortor nec porttitor
                  semper. Nullam egestas sem id tortor pellentesque semper eget
                  in sapien. Nam vestibulum nisi nec libero.
                </p>
              </div>
            </div>
            <div className="contact-link">
              <Link to="/contacto">
                <span className="contact-link-copy">
                  <strong>trabajemos juntos</strong>
                </span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
