import logo from "../../assets/15RtCh_beige.png";
import yt_button from "../../assets/yt.png";
import spotify_button from "../../assets/spotify.png";
import apple_button from "../../assets/apple.png";
import "./Header.css";
import { useEffect, useRef } from "react";

export const yt_link =
  "https://www.youtube.com/channel/UC4aKPSJl5OapD0vr2hajzbg";
export const spotify_link =
  "https://open.spotify.com/artist/3gc5uUgqm0TtXTh9ySOlGp?si=RQ2V4ZzXTxyj_uHujBx0Fg";
export const apple_link =
  "https://music.apple.com/us/artist/fifteen-reasons-to-change/1808511375";

const Header = ({ setIsHeaderVisible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsHeaderVisible(entry.isIntersecting);
      });
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="header" id="home" ref={ref}>
        <div className="logo_wrapper">
          <img
            src={logo}
            alt="15RTC Logo"
            className="logo"
            onClick={() => meme()}
          />
        </div>
        <div className="slogan_buttons_wrapper">
          <div className="slogan">
            <p>
              We are 15 Reasons to Change — conceptual metalcore from Warsaw.
            </p>
          </div>
          <div className="platform_links">
            <a href={yt_link}>
              <img
                src={yt_button}
                className="yt_button"
                alt="Link for YouTube music."
              />
            </a>
            <a href={spotify_link}>
              <img
                src={spotify_button}
                className="spotify_button"
                alt="Link for Spotify."
              />
            </a>
            <a href={apple_link}>
              <img
                src={apple_button}
                className="apple_button"
                alt="Link for Apple music."
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

let lastPlayed = 0;

function meme() {
  const now = Date.now();

  if (now - lastPlayed >= 7000) {
    const audio = new Audio("/meme.mp3");
    audio.play();
    lastPlayed = now;
  }
}

export default Header;
