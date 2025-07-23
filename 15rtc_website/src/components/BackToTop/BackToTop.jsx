import "./BackToTop.css";
import { scrollToSection } from "../../utils/scrollToSection";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const styles = {
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
  };

  return (
    <button
      className="backToTop"
      onClick={() => scrollToSection("home")}
      style={styles}
    >
      <p style={{ margin: "auto" }}>↑</p>
    </button>
  );
};

export default BackToTop;
