import Header from "./Header";
import MobileNav from "./MobileNav";

type About = {
  deskTop: boolean;
  setLanguage: (value: string) => void;
  setNavActive: (value: boolean) => void;
};

const About = ({ deskTop, setLanguage, setNavActive }: About) => {
  return (
    <div className="main-wrapper">
      <div className="about-wrapper">
        <MobileNav deskTop={deskTop} setNavActive={setNavActive} />
        <Header setNavActive={setNavActive} />
        <div className="content-container">
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
