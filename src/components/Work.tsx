import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";

type Work = {
  deskTop: boolean;
  setLanguage: (value: string) => void;
  setNavActive: (value: boolean) => void;
};

const Work = ({ deskTop, setLanguage, setNavActive }: Work) => {
  const initialState = 0;
  const [index, setIndex] = useState<number>(initialState);
  const carouselItems = ["work", "about", "contact"];

  function handleHover(e: React.MouseEvent) {
    if ((e.target as Element).innerHTML === "TRABAJO") {
      setIndex(0);
    } else if ((e.target as Element).innerHTML === "ACERCA") {
      setIndex(1);
    } else if ((e.target as Element).innerHTML === "CONTACTO") {
      setIndex(2);
    }
  }

  function increaseIndex() {
    if (index < carouselItems.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(initialState);
    }
  }

  useEffect(() => {
    if (!deskTop) {
      const startCarousel = setInterval(function () {
        increaseIndex();
      }, 3000);
      return () => clearInterval(startCarousel);
    }
  });

  return (
    <div className="main-wrapper">
      <div className="work-wrapper">
        <div className="work-hover-container">
          <div
            className={
              index === 0 ? "work-hover-bg1 show-bg" : "work-hover-bg1"
            }
          ></div>
          <div
            className={
              index === 1 ? "work-hover-bg2 show-bg" : "work-hover-bg2"
            }
          ></div>
          <div
            className={
              index === 2 ? "work-hover-bg3 show-bg" : "work-hover-bg3"
            }
          ></div>
        </div>
        <MobileNav deskTop={deskTop} setNavActive={setNavActive} />
        <Header setNavActive={setNavActive} />
        <div className="content-container">
          <div className="work-links-container">
            <div className="work-links-wrapper">
              <div className="work-links">
                <h2>
                  <Link
                    className={
                      index === 0 ? "work-link link-active" : "work-link"
                    }
                    onMouseEnter={handleHover}
                    onMouseLeave={() => setIndex(4)}
                    to={"/"}
                  >
                    TRABAJO
                  </Link>
                </h2>
                <h2>
                  <Link
                    className={
                      index === 1 ? "work-link link-active" : "work-link"
                    }
                    onMouseEnter={handleHover}
                    onMouseLeave={() => setIndex(4)}
                    to={"/acerca"}
                  >
                    ACERCA
                  </Link>
                </h2>
                <h2>
                  <Link
                    className={
                      index === 2 ? "work-link link-active" : "work-link"
                    }
                    onMouseEnter={handleHover}
                    onMouseLeave={() => setIndex(4)}
                    to={"/contacto"}
                  >
                    CONTACTO
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
