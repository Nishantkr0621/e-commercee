import React, { useContext, useState, useEffect } from "react";
import { FetchedData } from "../../RoutComponent";
import Filter from "../Filter";
import Card from "../topWear/Card";

const WhatsNew = () => {
  const { data, priceFilter , colorFilter } = useContext(FetchedData);
  const [list, setList] = useState(data);
  //const arr = priceFilter.split("-");
  useEffect(() => {
    setList(data);
  }, [data]);

  useEffect(() => {
    setList(
      data.filter((item) => {
        // console.log("topwear", Number(item.price));
        // console.log("topwear", priceFilter);
      
        const arr = priceFilter ? priceFilter.split("-") : [0, 200000];
        // console.log("arrrrrr",arr);
        return (
          arr[0] <= Number(item.price) && Number(item.price) <= arr[1]

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
        {list.map((item) => {
          return (
            <Card
              item={item}
              id={item.id_product}
            
            />
          );
        })}
      </div>
    </div>
  );
};
export default WhatsNew;
