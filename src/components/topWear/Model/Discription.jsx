import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./Discription.css";
//import Cart from "./Cart";
import Count from "./Count";
import { FetchedData } from "../../../RoutComponent";
//const initialData = 0 ;

const Discription = ({ selectedProduct, size }) => {
  // const [cartData, setCartData] = useState([]);
  //const itemCart = useContext(FetchedData);
  //use context
  const {
    addToCart,
    setAddToCart,

    setCartQuantity
  } = useContext(FetchedData);
  // add to cart function on click
  const cartFun = (selectedProduct, q) => {
    selectedProduct.quantity = q;
    console.log("q", q, selectedProduct);
    // ye samajh m nahi aaya
    const arr = addToCart.filter((i) => i.sku != selectedProduct.sku);
    setAddToCart([...arr, { ...selectedProduct }]);

    // console.log(addToCart);
  };
  return (
    <>
      <div>
        <h4>{selectedProduct.name}</h4>
        <p>SKU : {selectedProduct.sku}</p>
        <h5>Rs. {selectedProduct.price}</h5>
        <p>MRP (inclusive of all taxes)</p>
        <h6>SELECT SIZE</h6>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {size
            .filter((i, idx) => idx !== size.length - 1)
            .map((item) => {
              return (
                <div
                  onClick={() => alert(item)}
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "3px solid black"
                  }}
                >
                  {item}
                </div>
              );
            })}
        </div>
        <p>SIZE GUIDE</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          {/* count button for selecting the no of  product */}
          <Count
            quantity={selectedProduct.quantity}
            selectedProduct={selectedProduct}
          />

          {/* cart button */}
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <Button
              variant="primary"
              size="lg"
              active
              onClick={() => cartFun(selectedProduct, selectedProduct.quantity)}
            >
              ADD TO CART
            </Button>
            {/* buy button */}
            <div style={{ marginLeft: "20px", marginRight: "30px" }}>
              <Button variant="primary" size="lg" active>
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
        <h4>KNOW YOUR WEAR</h4>
        <p style={{ width: "580px" }}>{selectedProduct.description}</p>
        {/* discription div table */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "40px"
          }}
        >
          <div className="clo-1" style={{ paddingRight: "90px" }}>
            <p>Colour</p>
            <h6>{selectedProduct.color}</h6>
            <p>Fabric Detail</p>
            <h6>{selectedProduct.fabric_family}</h6>
            <p>Sleeve</p>
            <h6>{selectedProduct.sleeve}</h6>
          </div>
          <div className="col-2" style={{ width: "10rem" }}>
            <p>Fabric Content</p>
            <h6>{selectedProduct.l}</h6>
            <p>Size</p>
            <h6>{selectedProduct.w_size_chart}</h6>
            <p>Manufactured By</p>
            <h6>{selectedProduct.name_of_manufacturer}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Discription;
