import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FetchedData } from "../../RoutComponent";
let sum = 0;
// cart component
const Cart = () => {
  const [q, setQ] = useState(0);
  const [total, setTotal] = useState(0);

  //  extrsacted daata from useContext
  const { addToCart, setAddToCart, setData, data } = useContext(FetchedData);

  // this fun is used for removing the item from cart
  const remover = (id) => {
    //i.id_product

    const newArr = addToCart.filter((i, ind) => ind !== id);
    sum = newArr.reduce((s, c) => (s += c.quantity * c.price), 0);
    setAddToCart(newArr);
  };

  // this fun is used for changing the item quantity in cart
  const change = (item, quan) => {
    console.log("change");
    const arr = addToCart.filter((i) => i.sku != item.sku);
    sum = 0;

    if (quan == 0) {
      setAddToCart(arr);
      return;
    }

    const global = data.filter((i) => {
      if (i.sku == item.sku) {
        i.quantity = quan;
        return i;
      } else return i;
    });
    // ye samajh nahi aaya
    setData(global);
    item.quantity = quan;
    setQ(quan);
    setAddToCart([item, ...arr]);

    // array

    console.log(addToCart);

    console.log(sum);
    //
    // summing
  };

  useEffect(() => {
    sum = 0;
    addToCart.map((item) => {
      console.log("item quatity", item.quantity);

      sum += item.quantity * item.price;
    });
    setTotal(sum);
  }, [addToCart]);

  //
  const buyNowFunction = () => {
    if (sum === 0) {
      alert("please add item to the cart");
    } else {
      alert(`You have successfully purched the amount of Rs.${sum}`);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
        //  gap:"4%",
        //  backgroundColor:"pink"
      }}
    >
      <div
        style={{
          backgroundColor: "pink",
          width: "68%",
          margin: "1%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%"
          }}
        >
          <div style={{ width: "15%" }}>Item</div>
          <div style={{ width: "25%" }}>Item Name</div>
          <div style={{ width: "18%" }}>Price</div>
          <div style={{ width: "14%" }}>Qty</div>
          <div style={{ width: "16%" }}>Remove Item</div>
          <div style={{ width: "10%" }}> Subtotal</div>
        </div>
        {addToCart.map((item, idx) => {
          console.log(item.quantity, "item");

          return (
            <div
              key={idx}
              id={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "5px",
                width: "100%"
              }}
            >
              {/* this div is used for image */}
              <div style={{ width: "15%" }}>
                <img
                  style={{ display: "block" }}
                  src={item.image}
                  height="80px"
                  alt=""
                />
              </div>
              {/* this div is for name */}
              <div style={{ width: "30%" }}>{item.name}</div>
              {/* this div is for price */}
              <div style={{ width: "18%" }}>Rs. {item.price}</div>

              {/* button for increment and decrement  */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: "20%"
                }}
              >
                <button
                  style={{ width: "50px", backgroundColor: "#fd7e14" }}
                  onClick={() => change(item, Number(item.quantity) - 1)}
                >
                  -
                </button>

                {/* this div is used for item Quantity */}
                <div
                  style={{
                    width: "60px",
                    height: "30px",
                    backgroundColor: "#cf277a",
                    textAlign: "center"
                    // borderRadious:"20px"
                  }}
                >
                  {item.quantity}
                </div>

                <button
                  onClick={() => change(item, Number(item.quantity) + 1)}
                  style={{ width: "50px", backgroundColor: "#fd7e14" }}
                >
                  +
                </button>
              </div>

              {/* This div is used for remove button */}
              <div style={{ width: "15%" }}>
                <button
                  style={{ backgroundColor: "pink", borderRadius: "10px" }}
                  onClick={() => remover(idx)}
                >
                  Remove
                </button>
              </div>
              {/* this div is used for item price */}
              <div style={{ width: "15%" }}>
                Rs. {item.quantity * item.price}
              </div>
            </div>
          );
        })}
      </div>

      {/* this div is used for SUMMARY on right side */}
      <div
        style={{
          width: "28%",
          backgroundColor: "gray",
          margin: "1%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap"
          // alignItems:"center"
        }}
      >
        <div>SUMMARY</div>
        <div>Subtotal : Rs.{total}</div>
        <div>Discount: Rs.0</div>
        <div>Order Total : Rs.{total}</div>
        <div style={{ margin: "10px" }}>
          <button
            style={{
              width: "90px",
              height: "40px",
              borderRadius: "13px",
              backgroundColor: "greenyellow"
            }}
            onClick={() => buyNowFunction()}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
