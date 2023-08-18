import MobileNav from "./MobileNav";
import Header from "./Header";
import { Link } from "react-router-dom";

type UFX = {
  deskTop: boolean;
  setLanguage: (value: string) => void;
  setNavActive: (value: boolean) => void;
};

const UFX = ({ deskTop, setLanguage, setNavActive }: UFX) => {
  return (
    <div className="main-wrapper">
      <div className="ufx-wrapper">
        <MobileNav deskTop={deskTop} setNavActive={setNavActive} />
        <Header setNavActive={setNavActive} />
        <div className="content-container">
          <div className="work-content-wrapper">
            <div className="work-content-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                mattis sem eget enim pretium, eget blandit velit accumsan.
                Vivamus efficitur augue diam. Fusce in finibus sem. Pellentesque
                auctor ipsum quis elit vestibulum faucibus. Suspendisse sit amet
                ipsum a elit elementum eleifend. Curabitur mattis nisl erat, at
                aliquet ligula tincidunt eget. Cras varius ipsum a magna
                vestibulum, at vulputate magna tincidunt.
                <br />
                <br />
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Sed luctus fermentum tellus.
                Etiam sagittis urna et justo consectetur, et posuere lacus
                euismod. In vitae nisi et felis pulvinar convallis. Morbi et
                diam pellentesque erat consectetur egestas nec rhoncus turpis.
                Proin maximus vel justo a gravida. Aliquam a sollicitudin magna.
                Aliquam mattis rhoncus diam id suscipit. Cras a nulla lacus.
                Nullam at erat ut augue vulputate luctus nec eget odio. Aliquam
                id sapien nunc. Curabitur non vestibulum justo. Sed vestibulum
                ex nec magna consequat, eu euismod arcu commodo. Vestibulum quis
                faucibus risus. Sed sagittis sapien condimentum pulvinar semper.
                Nulla molestie mi quis condimentum luctus. Integer nisi orci,
                lobortis aliquam sapien a, venenatis vulputate tellus.
                <br />
                <br />
                In fermentum, magna in dignissim elementum, nisi nisi bibendum
                magna, id tristique sapien orci at nibh. Nullam vulputate
                sodales augue. Sed in est at dui hendrerit aliquam. Vestibulum
                cursus eget magna eu pulvinar. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Quisque quis lorem urna. Ut aliquet
                cursus volutpat. Sed sollicitudin vestibulum mauris, nec viverra
                purus. Cras malesuada pellentesque eros, sed feugiat libero
                mollis in. Integer dictum lectus nec convallis bibendum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                <br />
                <br />
                In mattis vitae arcu sit amet faucibus. Praesent pellentesque
                euismod accumsan. Integer sagittis lobortis nunc, et hendrerit
                quam luctus eget. Phasellus tincidunt tortor nec porttitor
                semper. Nullam egestas sem id tortor pellentesque semper eget in
                sapien. Nam vestibulum nisi nec libero.
              </p>
            </div>
            <div className="page-link">
              <Link to="/trabajo/fotografia">
                <span className="material-symbols-outlined arrow-back">
                  arrow_back
                </span>
                <span className="page-link-copy">
                  <strong>Fotografía</strong>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UFX;
