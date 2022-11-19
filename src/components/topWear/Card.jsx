import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FetchedData } from "../../RoutComponent";
//import ItemDetails from "./ItemDetails";
export default function Card({ item, setSelected, id }) {
  const [show, setShow] = useState("none");
  const { selectItemDetails, setSelectItemDetails } = useContext(FetchedData);
  // console.log("iddddd", id);

  return (
    <>
      <Link to={`/topwear/${id}`}>
        <div
          className="card"
          key={item.id_product}
          onClick={() => {
            setSelectItemDetails(item);
          }}
          onMouseEnter={() => setShow("block")}
          onMouseLeave={() => setShow("none")}
        >
          <div className="img-detail" style={{ position: "relative" }}>
            <img className="img" src={item.image} alt="" />
            <div
              style={{
                display: show,
                position: "absolute",
                bottom: "0px",
                width: "100%"
              }}
              className="details"
            >
              VIEW DETAILS
            </div>
          </div>

          <div className="discription">
            <div className="child">{item.name}</div>
            <div className="child">Rs.{item.price}</div>
            <div
              className="child"
              style={{
                display: show,
                width: "100%"
              }}
            >
              Size-
              {item.size.split(",").join("").split("[").join(" ").split("]")}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
