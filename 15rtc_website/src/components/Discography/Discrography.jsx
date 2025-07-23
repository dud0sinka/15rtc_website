import "./Discrography.css";
import React from "react";

const Discrography = React.forwardRef((_, ref) => {
  return (
    <>
      <div className="discography" id="discography" ref={ref}>
        <p>discography</p>
      </div>
    </>
  );
});

export default Discrography;
