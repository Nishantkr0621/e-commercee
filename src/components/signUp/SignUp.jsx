import React, { useState } from "react";
import BootstrapSignIn from "./BootstrapSignIn";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "3%",
        backgroundColor: "gray"
      }}
    >
      <h2 style={{ color: "gold" }}>LogIn </h2>
      <div style={{ width: "30%", padding: "5%", backgroundColor: "pink" }}>
        <BootstrapSignIn />
      </div>
    </div>
  );
};
export default SignUp;
