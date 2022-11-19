import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useState, useContext, useRef } from "react";
import { FetchedData } from "../RoutComponent";

function Filter() {
  const { priceFilter, setPriceFilter, setColorFilter } = useContext(
    FetchedData
  );
  const fil1 = useRef();
  const fil2 = useRef();
  const fil3 = useRef();

  const col1 = useRef();
  const col2 = useRef();
  const col3 = useRef();
  const col4 = useRef();
  const col5 = useRef();
  const col6 = useRef();

  const productPriceChecker = (e) => {
    if (e.target.checked) {
      setPriceFilter(e.target.value);
    } else setPriceFilter("0-200000");

    if (fil1.current === e.target) {
      fil2.current.checked = false;
      fil3.current.checked = false;
    } else if (fil2.current === e.target) {
      fil1.current.checked = false;
      fil3.current.checked = false;
    } else if (fil3.current === e.target) {
      fil1.current.checked = false;
      fil2.current.checked = false;
    }
  };

  const productColorChecker = (e) => {
    if (e.target.checked) {
      //  console.log("e target ka value", e.target.value);
      setColorFilter(e.target.value);
    } else {
      setColorFilter("");
    }
    if (col1.current.value === e.target.value) {
      //  console.log("col filter ka value", col1.current.value);
      col2.current.checked = false;
      col3.current.checked = false;
      col4.current.checked = false;
      col5.current.checked = false;
      col6.current.checked = false;
    } else if (col2.current === e.target) {
      col1.current.checked = false;
      col3.current.checked = false;
      col4.current.checked = false;
      col5.current.checked = false;
      col6.current.checked = false;
    } else if (col3.current === e.target) {
      col1.current.checked = false;
      col2.current.checked = false;
      col4.current.checked = false;
      col5.current.checked = false;
      col6.current.checked = false;
    } else if (col4.current === e.target) {
      col1.current.checked = false;
      col2.current.checked = false;
      col3.current.checked = false;
      col5.current.checked = false;
      col6.current.checked = false;
    } else if (col5.current === e.target) {
      col1.current.checked = false;
      col2.current.checked = false;
      col3.current.checked = false;
      col4.current.checked = false;
      col6.current.checked = false;
    } else if (col6.current === e.target) {
      col1.current.checked = false;
      col2.current.checked = false;
      col3.current.checked = false;
      col4.current.checked = false;
      col5.current.checked = false;
    }
  };

  return (
    <div
      style={{
        border: "solid 1px"
      }}
    >
      <Accordion defaultActiveKey="0">
        <div style={{}}>FILTER</div>

        <Accordion.Item eventKey="0">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              aria-label="option 1"
              value="0-2000"
              label="Rs.0 to Rs.2000"
              onClick={(e) => productPriceChecker(e)}
              ref={fil1}
            />
            <Form.Check
              aria-label="option 2"
              value="2001-4000"
              onClick={(e) => productPriceChecker(e)}
              label="Rs.2000 to Rs.4000"
              ref={fil2}
            />
            <Form.Check
              aria-label="option 3"
              value="4001-6000"
              onClick={(e) => productPriceChecker(e)}
              label="Rs.4000 to Rs.6000"
              ref={fil3}
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Colour</Accordion.Header>
          <Accordion.Body>
            <Form.Check
              backgroundColor="green"
              aria-label="option 1"
              label="Black"
              value="Black"
              onClick={(e) => productColorChecker(e)}
              ref={col1}
            />
            <Form.Check
              aria-label="option 1"
              label="Pink"
              value="Pink"
              onClick={(e) => productColorChecker(e)}
              ref={col2}
            />
            <Form.Check
              aria-label="option 1"
              label="Red"
              value="Red"
              onClick={(e) => productColorChecker(e)}
              ref={col3}
            />
            <Form.Check
              aria-label="option 1"
              label="Green"
              value="Green"
              onClick={(e) => productColorChecker(e)}
              ref={col4}
            />
            <Form.Check
              aria-label="option 1"
              label="Yellow"
              value="Yellow"
              onClick={(e) => productColorChecker(e)}
              ref={col5}
            />
            <Form.Check
              aria-label="option 1"
              label="Gold"
              value="Gold"
              onClick={(e) => productColorChecker(e)}
              ref={col6}
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            <Form.Check aria-label="option 1" label="Kurtas" />
            <Form.Check aria-label="option 1" label="Tops" />
            <Form.Check aria-label="option 1" label="Sets & Dresses" />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Size</Accordion.Header>
          <Accordion.Body>
            <Form.Check aria-label="option 1" label="S" />
            <Form.Check aria-label="option 1" label="M" />
            <Form.Check aria-label="option 1" label="L" />
            <Form.Check aria-label="option 1" label="XL" />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Occasion</Accordion.Header>
          <Accordion.Body>
            <Form.Check aria-label="option 1" label="Casual" />
            <Form.Check aria-label="option 1" label="Festive" />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Pattern</Accordion.Header>
          <Accordion.Body>
            <Form.Check aria-label="option 1" label="Animal" />
            <Form.Check aria-label="option 1" label="Printed" />
            <Form.Check aria-label="option 1" label="Solid" />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>Sort By</Accordion.Header>
          <Accordion.Body>
            <Form.Check aria-label="option 1" label="Price(Low to High)" />
            <Form.Check aria-label="option 1" label="Price(High to Low)" />
            <Form.Check aria-label="option 1" label="Discount" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Filter;
