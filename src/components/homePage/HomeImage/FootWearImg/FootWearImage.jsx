import React from "react";
import FootWearButton from "./FootWearButton";
const FootWearImage = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              //flexWrap: "wrap",
              width: "60%",
              height: "60%"
            }}
          >
            <img
              style={{
                display: "block",
                maxWidth: "30%",
                height: "auto",
                margin: "2%"
              }}
              className="foot-img"
              src="https://wforwoman.gumlet.io/footwearcollection/165399944821AUW9FW00086-04018.jpg"
              alt="foot-foto"
            />

            <img
              style={{
                display: "block",
                maxWidth: "30%",
                height: "auto",
                margin: "2%"
              }}
              className="foot-img"
              src="https://wforwoman.gumlet.io/footwearcollection/165399937322FEW9FW00205-04089.JPG"
              alt="foot-foto"
            />

            <img
              style={{
                display: "block",
                maxWidth: "30%",
                height: "auto",
                margin: "2%"
              }}
              className="foot-img"
              src="https://wforwoman.gumlet.io/footwearcollection/165399937322FEW9FW00122-04031.JPG"
              alt="foot-foto"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              //flexWrap: "wrap",
              width: "60%",
              height: "60%"
            }}
          >
            <img
              style={{
                display: "block",
                maxWidth: "30%",
                height: "auto",
                margin: "2%"
              }}
              className="foot-img"
              src="https://wforwoman.gumlet.io/footwearcollection/165399937321FEW9FW0064-04089.jpg"
              alt="foot-foto"
            />
            <img
              style={{
                display: "block",
                maxWidth: "30%",
                height: "auto",
                margin: "2%"
              }}
              className="foot-img"
              src="https://wforwoman.gumlet.io/footwearcollection/165399944822FEW9FW00080-04001.JPG"
              alt="foot-foto"
            />
            <img
              style={{
                display: "block",
                maxWidth: "30%",
                height: "auto",
                margin: "2%"
              }}
              className="foot-img"
              src="https://wforwoman.gumlet.io/footwearcollection/165399937321FEW9FW00045-04001.jpg"
              alt="foot-foto"
            />
          </div>
        </div>
        <FootWearButton />
      </div>
    </>
  );
};
export default FootWearImage;
