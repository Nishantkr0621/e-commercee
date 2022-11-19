import React, { useContext } from "react";
import { FetchedData } from "../RoutComponent";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// this is for logossss
import { GiSharpCrown } from "react-icons/gi";
//for bag icon
import { BsBagPlusFill } from "react-icons/bs";
// love this icon
import { BsFillHeartFill } from "react-icons/bs";
// profile icon
import { BsFillPersonFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  const { searchInput, setSearchInput, addToCart } = useContext(FetchedData);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">
          <GiSharpCrown style={{ fontSize: "50px", color: "gold" }} />
          {/* </span> */}
          TrueCrown
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/topwear">
              TOP WEAR
            </Link>
            <Link className="nav-link" to="/bottomwear">
              BOTTOM WEAR
            </Link>
            <Link className="nav-link" to="/whatsnew">
              WHATS NEW
            </Link>
            <Link className="nav-link" to="/footwear">
              FOOT WEAR
            </Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              value={searchInput}
              placeholder="Search"
              onChange={(e) => setSearchInput(e.target.value)}
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              // onClick={(e) => setSearchInput(e.target.value)}
            >
              Search
            </Button>
          </Form>

          <Nav style={{ paddingLeft: "50px" }}>
            <Link
              className="nav-link"
              style={{ paddingLeft: "30px" }}
              to="/signin"
            >
              <BsFillPersonFill />
            </Link>
            <Link
              className="nav-link"
              style={{ paddingLeft: "30px" }}
              to="/wishlist"
            >
              <BsFillHeartFill />
            </Link>

            <Link
              className="nav-link"
              style={{ paddingLeft: "30px" }}
              to="/cart"
            >
              {/* cart component */}
              <button
                type="button"
                className="badge bg-dark text-secondary position-relative"
                style={{ fontSize: "15px" }}
              >
                <BsBagPlusFill />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {/* <BsBagPlusFill /> */}
                  {addToCart.length}
                </span>
              </button>
              {/* </BsBagPlusFill > */}
            </Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
