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

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Discrography />
      <Shows />
      <Store />
      <Gallery />
      <About />
      <SunlitSorrows />
      <BackToTop />
    </>
  );
};

export default App;
