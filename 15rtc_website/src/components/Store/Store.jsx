import "./Store.css";
import React from "react";

const Store = React.forwardRef((_, ref) => {
  return (
    <>
      <div className="store" id="store" ref={ref}>
        <p>store</p>
      </div>
    </>
  );
});

export default Store;
