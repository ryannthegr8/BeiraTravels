//This code is explained in the site below
// https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/

//icon
import { FaAngleUp } from "react-icons/fa";

//scrolling
import { useState, useEffect } from "react";

import "../../index.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
