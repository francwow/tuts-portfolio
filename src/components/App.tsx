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
  }, []);

  useEffect(() => {
    if (deskTop) {
      setNavActive(false);
    }
  }, [deskTop]);

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
              path="/acerca"
              element={
                <About
                  deskTop={deskTop}
                  setLanguage={setLanguage}
                  setNavActive={setNavActive}
                />
              }
            />
            <Route
              path="/contacto"
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
