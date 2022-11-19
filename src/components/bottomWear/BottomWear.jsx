import React, { useContext, useState, useEffect } from "react";
import { FetchedData } from "../../RoutComponent";
import Filter from "../Filter";
import CardTwo from "./CardTwo";
const BottomWear = () => {
  const { data, priceFilter, colorFilter } = useContext(FetchedData);
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  useEffect(() => {
    setList(
      data.filter((item) => {
        // console.log("topwear", Number(item.price));
        // console.log("topwear", priceFilter);
        const arr = priceFilter ? priceFilter.split("-") : [0, 200000];

        return (
          arr[0] <= Number(item.price) && Number(item.price) <= arr[1]

          //priceFilter.split("-").Arr[1]
        );
      })
    );
  }, [priceFilter]);

  useEffect(() => {
    colorFilter
      ? setList(
          data.filter((item) => {
            return item.color === colorFilter;
          })
        )
      : setList(data);
  }, [colorFilter]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        padding: "15px"
      }}
    >
      <div style={{ width: "20%" }}>
        <Filter />
      </div>

      <div
        style={{
          width: "80%"
        }}
        className="display-product"
      >
        {list.map((item, idx) => {
          return (
            <CardTwo item={list[list.length - 1 - idx]} id={item.id_product} />
          );
        })}
      </div>
    </div>
  );
};
export default BottomWear;
