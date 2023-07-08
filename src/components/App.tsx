import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import { LanguageContextType } from "../types/Types";
import { Images } from "../data/Images";
import LanguageContext from "../context/LanguageContext";
import ScrollTop from "./ScrollTop";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  const [language, setLanguage] = useState<LanguageContextType>("ES");
  const deskTop = useMediaQuery("(min-width: 961px)");

  useEffect(() => {
    Images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollTop />
      <LanguageContext.Provider value={language}>
        <Routes>
          <Route path="/" element={<Work deskTop={deskTop} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
};

export default App;
