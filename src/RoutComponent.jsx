import React, { useState, uesEffect, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/homePage/Home";
import TopWear from "./components/topWear/TopWear";
import BottomWear from "./components/bottomWear/BottomWear";
import WhatsNew from "./components/whatsNew/WhatsNew";
import SignIn from "./components/signUp/SignUp";
import Cart from "./components/addToCart/Cart";
import WishList from "./components/wishList/WishList";
import FootWear from "./components/footWear/FootWear";
import Error from "./components/Error/Errorone";
import Footer from "./components/Footer";
import ItemDetails from "./components/topWear/ItemDetails";

const FetchedData = createContext();

const RoutComponent = () => {
  async function fetchDataFun() {
    const fetchData = await fetch(
      "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=60&sort_by=&sort_dir=desc&filter="
    );
    let fetchProduct = await fetchData.json();
    setData(fetchProduct.result.products);
  }

  useEffect(() => {
    fetchDataFun();
  }, []);
  const [data, setData] = useState([]);
  const [selectItemDetails, setSelectItemDetails] = useState("");
  const [addToCart, setAddToCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(5);
  // this is used for price filtering
  const [priceFilter, setPriceFilter] = useState("");
  // this is used for color filter
  const [colorFilter, setColorFilter] = useState("");
  return (
    <>
      <FetchedData.Provider
        value={{
          data: data,
          setData: setData,
          selectItemDetails: selectItemDetails,
          setSelectItemDetails: setSelectItemDetails,
          addToCart: addToCart,
          setAddToCart: setAddToCart,
          quantity: quantity,
          setQuantity: setQuantity,
          cartQuantity: cartQuantity,
          setCartQuantity: setCartQuantity,
          priceFilter: priceFilter,
          setPriceFilter: setPriceFilter,
          colorFilter: colorFilter,
          setColorFilter: setColorFilter
        }}
      >
        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/topwear" element={<TopWear />} />

            <Route path="/topwear/:id" element={<ItemDetails />} />

            <Route path="/bottomwear" element={<BottomWear />} />

            <Route path="/whatsnew" element={<WhatsNew />} />

            <Route path="/signin" element={<SignIn />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/wishlist" element={<WishList />} />

            <Route path="/footwear" element={<FootWear />} />

            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </FetchedData.Provider>
    </>
  );
};
export default RoutComponent;
export { FetchedData };
