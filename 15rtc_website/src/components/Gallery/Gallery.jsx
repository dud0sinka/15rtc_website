import "./Gallery.css";
import React from "react";

const Gallery = React.forwardRef((_, ref) => {
  return (
    <>
      <div className="gallery" id="gallery" ref={ref}>
        <p>gallery</p>
      </div>
    </>
  );
});

export default Gallery;
