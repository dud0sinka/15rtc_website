import "./Navbar.css";
import { yt_link, spotify_link, apple_link } from "../Header/Header";
import { scrollToSection } from "../../utils/scrollToSection";

const Navbar = ({ isHeaderVisible, isSectionActive }) => {
  const styles = {
    opacity: isHeaderVisible ? 0 : 1,
    pointerEvents: isHeaderVisible ? "none" : "auto",
  };

  return (
    <>
      <nav className="navbar">
        <section className="left_section"></section>
        <section className="middle_section">
          <div>
            <button onClick={() => scrollToSection("home")}>HOME</button>
          </div>
          <div>
            <button
              onClick={() => scrollToSection("discography")}
              className={
                isSectionActive === "discography" ? "active" : "unactive"
              }
            >
              DISCOGRAPHY
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToSection("shows")}
              className={isSectionActive === "shows" ? "active" : "unactive"}
            >
              SHOWS
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToSection("store")}
              className={isSectionActive === "store" ? "active" : "unactive"}
            >
              STORE
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToSection("gallery")}
              className={isSectionActive === "gallery" ? "active" : "unactive"}
            >
              GALLERY
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToSection("about")}
              className={isSectionActive === "about" ? "active" : "unactive"}
            >
              ABOUT
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToSection("sunlitsorrows")}
              className={
                isSectionActive === "sunlitsorrows" ? "active" : "unactive"
              }
            >
              SUNLIT SORROWS
            </button>
          </div>
        </section>
        <section className="right_section">
          <div className="small_platform_links" style={styles}>
            <div>
              <a href={yt_link}>YT</a>
            </div>
            <div>
              <a href={spotify_link}>SPOTIFY</a>
            </div>
            <div>
              <a href={apple_link}>APPLE</a>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
