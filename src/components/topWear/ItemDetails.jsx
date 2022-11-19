import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FetchedData } from "../../RoutComponent";
import ModelImages from "./Model/ModelImages";
import Discription from "./Model/Discription";
const ItemDetails = () => {
  const { id } = useParams();
  const { selectItemDetails } = useContext(FetchedData);
  let size = selectItemDetails.size
    .split(",")
    .join("")
    .split("[")
    .join("")
    .split("]");
  return (
    <div
      className="model"
      style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
    >
      <div
        style={{
          margin: "0px",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <div className="left-half">
          <ModelImages selectedProduct={selectItemDetails} />
        </div>

        <div className="right-half" style={{ padding: "25px" }}>
          <Discription
            selectedProduct={selectItemDetails}
            size={size}
            // setCartData={setCartData}
          />
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
