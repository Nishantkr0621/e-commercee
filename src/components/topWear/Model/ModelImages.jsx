import React, { useState } from "react";

import ModelSingleImage from "./ModelSingleImage";

const ModelImages = ({ selectedProduct }) => {
  console.log("data:", selectedProduct);
  const [bigImage, setBigImage] = useState(selectedProduct.gallery[0].image);
  return (
    <>
      {/* <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "35px",
          padding: "25px"
        }}
      >
        <div>
          {selectedProduct.gallery
            ? selectedProduct.gallery.map((i) => (
                <div
                  style={{ width: "100px", padding: "10px" }}
                  onClick={() => setBigImage(i.image)}
                >
                  <img src={i.image} width="100%" />
                </div>
              ))
            : null}
        </div>

        <div>
          <ModelSingleImage img={bigImage} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default ModelImages;
