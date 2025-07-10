import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="home">
          <a href="">HOME</a>
        </div>
        <div className="discography">
          <a href="">DISCOGRAPHY</a>
        </div>
        <div className="shows">
          <a href="">SHOWS</a>
        </div>
        <div className="store">
          <a href="">STORE</a>
        </div>
        <div className="about">
          <a href="">ABOUT</a>
        </div>
        <div className="sunlit_sorrows">
          <a href="">SUNLIT SORROWS</a>
        </div>
      </nav>
      <div className="breakline navbar-breakline" />
    </>
  );
};

export default Navbar;
