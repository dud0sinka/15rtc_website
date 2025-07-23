import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Discrography from "./components/Discography/Discrography";
import Shows from "./components/Shows/Shows";
import Store from "./components/Store/Store";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import SunlitSorrows from "./components/SunlitSorrows/SunlitSorrows";
import BackToTop from "./components/backToTop/backToTop";
import { useEffect, useState, useRef } from "react";

// keep track of visible sections to style them in Navbar.css when in viewport
const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSectionActive, setIsSectionActive] = useState(false);

  const discographyRef = useRef(null);
  const showsRef = useRef(null);
  const storeRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const sunlitRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.65 };
    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setIsSectionActive(visibleEntry.target.id);
      } else setIsSectionActive(null);
    }, options);

    const sections = [
      discographyRef,
      showsRef,
      storeRef,
      galleryRef,
      aboutRef,
      sunlitRef,
    ];

    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header setIsHeaderVisible={setIsHeaderVisible} />
      <Navbar
        isHeaderVisible={isHeaderVisible}
        isSectionActive={isSectionActive}
      />
      <Home />
      <Discrography ref={discographyRef} />
      <Shows ref={showsRef} />
      <Store ref={storeRef} />
      <Gallery ref={galleryRef} />
      <About ref={aboutRef} />
      <SunlitSorrows ref={sunlitRef} />
      <BackToTop />
    </>
  );
};

export default App;
