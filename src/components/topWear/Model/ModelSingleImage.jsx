import React from "react";

const ModelSingleImage = ({ img }) => {
  return (
    <>
      <div style={{ width: "500px", height: "755px" }}>
        <img src={img} style={{ width: "100%", height: "100%" }} />
      </div>
    </>
  );
};

export default ModelSingleImage;
