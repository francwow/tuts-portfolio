import Header from "./Header";
import MobileNav from "./MobileNav";

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
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
