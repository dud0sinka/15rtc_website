import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <button onClick={() => scrollToSection("home")}>HOME</button>
        </div>
        <div>
          <button onClick={() => scrollToSection("discography")}>
            DISCOGRAPHY
          </button>
        </div>
        <div>
          <button onClick={() => scrollToSection("shows")}>SHOWS</button>
        </div>
        <div>
          <button onClick={() => scrollToSection("store")}>STORE</button>
        </div>
        <div>
          <button onClick={() => scrollToSection("gallery")}>GALLERY</button>
        </div>
        <div>
          <button onClick={() => scrollToSection("about")}>ABOUT</button>
        </div>
        <div>
          <button onClick={() => scrollToSection("sunlitsorrows")}>
            SUNLIT SORROWS
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

export function scrollToSection(elementName) {
  document.getElementById(elementName)?.scrollIntoView(false);
}
