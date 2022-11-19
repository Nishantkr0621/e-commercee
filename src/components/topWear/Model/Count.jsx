import React, { useContext, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import { FetchedData } from "../../../RoutComponent";
const Count = ({ selectedProduct, quantity = 0 }) => {
  const [q, setQ] = useState(Number(quantity));
  const xhange = (ans) => {
    console.log("hi", ans, selectedProduct.quantity);
    if (ans == -1) return;
    setQ(ans);
    selectedProduct.quantity = ans;
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <button
          onClick={() => xhange(q - 1)}
          style={{
            width: "40px",
            height: "40px"
          }}
        >
          <FaMinus />
        </button>

        <div
          style={{
            backgroundColor: "blue",
            width: "40px",
            height: "40px",
            font: "10px",
            textAlign: "center",
            padding: "6px"
          }}
        >
          {q}
        </div>

        <button
          onClick={() => xhange(q + 1)}
          style={{ width: "40px", height: "40px" }}
        >
          <GoPlus />
        </button>
      </div>
    </>
  );
};
export default Count;
