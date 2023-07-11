import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import { LanguageContextType, NavContextType } from "../types/Types";
import { Images } from "../data/Images";
import LanguageContext from "../context/LanguageContext";
import ScrollTop from "./ScrollTop";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import NavContext from "../context/NavContext";

const App = () => {
  const [language, setLanguage] = useState<LanguageContextType>("ES");
  const [navActive, setNavActive] = useState<NavContextType>(false);
  const deskTop = useMediaQuery("(min-width: 961px)");

  useEffect(() => {
    Images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    if (deskTop) {
      setNavActive(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollTop />
      <NavContext.Provider value={navActive}>
        <LanguageContext.Provider value={language}>
          <Routes>
            <Route
              path="/"
              element={
                <Work
                  deskTop={deskTop}
                  setLanguage={setLanguage}
                  setNavActive={setNavActive}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  deskTop={deskTop}
                  setLanguage={setLanguage}
                  setNavActive={setNavActive}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  deskTop={deskTop}
                  setLanguage={setLanguage}
                  setNavActive={setNavActive}
                />
              }
            />
          </Routes>
        </LanguageContext.Provider>
      </NavContext.Provider>
    </BrowserRouter>
  );
};

export default App;
