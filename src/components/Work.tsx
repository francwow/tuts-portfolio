import { Link } from "react-router-dom";
import { useState, MouseEvent, useEffect } from "react";
import Header from "./Header";

type Work = {
  deskTop: boolean;
};

const Work = ({ deskTop }: Work) => {
  const initialState = 0;
  const [index, setIndex] = useState<number>(initialState);
  const carouselItems = ["work", "about", "contact"];

  function handleHover(e: MouseEvent) {
    if ((e.target as Element).innerHTML === "WORK") {
      setIndex(0);
    } else if ((e.target as Element).innerHTML === "ABOUT") {
      setIndex(1);
    } else if ((e.target as Element).innerHTML === "CONTACT") {
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
        <Header />
        <div className="content-container">
          <h2>
            <Link
              onMouseEnter={handleHover}
              onMouseLeave={() => setIndex(4)}
              to={"/"}
            >
              WORK
            </Link>
          </h2>
          <h2>
            <Link
              onMouseEnter={handleHover}
              onMouseLeave={() => setIndex(4)}
              to={"/about"}
            >
              ABOUT
            </Link>
          </h2>
          <h2>
            <Link
              onMouseEnter={handleHover}
              onMouseLeave={() => setIndex(4)}
              to={"/contact"}
            >
              CONTACT
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work;
