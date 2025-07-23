import "./About.css";
import React from "react";

const About = React.forwardRef((_, ref) => {
  return (
    <>
      <div className="about" id="about" ref={ref}>
        <p>about</p>
      </div>
    </>
  );
});

export default About;
