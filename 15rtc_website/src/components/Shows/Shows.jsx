import "./Shows.css";
import React from "react";

const Shows = React.forwardRef((_, ref) => {
  return (
    <>
      <div className="shows" id="shows" ref={ref}>
        <p>shows</p>
      </div>
    </>
  );
});

export default Shows;
