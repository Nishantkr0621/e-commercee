import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import {
  FaCcMastercard,
  FaAmazonPay,
  FaCcVisa,
  FaCcPaypal
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          color: "gold",
          backgroundColor: "black",
          padding: "40px",
          justifyContent: "center",
          gap: "85px"
        }}
      >
        <div>
          <h6>ABOUT</h6>
          <div>
            <h6>TrueCrown is one of the unique </h6>
            <h6>online shopping sites in India</h6>
            <h6>where fashion is accessible to all.</h6>
          </div>
        </div>
        <div>
          <h6>CATEGORIES</h6>
          <div>
            <Link to="/topwear">
              <a style={{ color: "gold" }} href="">
                TOP WEAR
              </a>
            </Link>
          </div>
          <div>
            <Link to="/bottomwear">
              <a style={{ color: "gold" }} href="">
                BOTTOM WEAR
              </a>
            </Link>
          </div>
          <div>
            <Link to="/whatsnew">
              <a style={{ color: "gold" }} href="#">
                WHAT'S NEW
              </a>
            </Link>
          </div>
          <div>
            <Link to="/footwear">
              <a style={{ color: "gold" }} href="#">
                FOOT WEAR
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h6>INFORMATION</h6>
          <div>
            <a style={{ color: "gold" }} href="#">
              About Us
            </a>
          </div>
          <div>
            <a style={{ color: "gold" }} href="#">
              Contact Us
            </a>
          </div>
          <div>
            <a style={{ color: "gold" }} href="#">
              Term & Condition
            </a>
          </div>
          <div>
            <a style={{ color: "gold" }} href="#">
              Returns & Exchange
            </a>
          </div>
          <div>
            <a style={{ color: "gold" }} href="#">
              Shipping & Delivery
            </a>
          </div>
        </div>
        <div>
          <h6>CONTACT</h6>

          <div>XYZ Market,PATNA</div>
          <div>BIHAR , INDIA</div>
          <div>PIN CODE : 842001</div>
          <div>
            <a
              style={{ color: "gold", marginRight: "20px" }}
              href="https://www.facebook.com/"
            >
              <BsFacebook />
            </a>
            <a
              style={{ color: "gold", marginRight: "20px" }}
              href="https://www.instagram.com/accounts/login/"
            >
              <BsInstagram />
            </a>
            <a
              style={{ color: "gold", marginRight: "20px" }}
              href="https://twitter.com/"
            >
              <BsTwitter />
            </a>
            <a style={{ color: "gold" }} href="https://www.youtube.com/">
              <BsYoutube />
            </a>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <h6>We Accepts..</h6>
          <div>
            <FaCcMastercard style={{ marginRight: "25px", fontSize: "30px" }} />
            <FaAmazonPay style={{ marginRight: "25px", fontSize: "30px" }} />
            <FaCcVisa style={{ marginRight: "25px", fontSize: "30px" }} />
            <FaCcPaypal style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "black"
        }}
      >
        <p
          style={{
            color: "gold",
            fontSize: "20px",
            borderColor: "red",
            borderRadius: "30px"
          }}
        >
          © 2022 www.truecrown.com. All rights reserved.
        </p>
        <p
          style={{
            color: "gold",
            fontSize: "20px",
            borderColor: "red",
            borderRadius: "30px"
          }}
        >
          created by Nishant Kumar
        </p>
      </div>
    </>
  );
};
export default Footer;
