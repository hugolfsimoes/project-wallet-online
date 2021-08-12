import React from "react";
import maisImg from "../images/mais.png";
import menosImg from "../images/menos.png";

export default function Footer() {
  return (
    <footer style={{ width: "100%", height: "100px" }}>
      <img
        src={maisImg}
        alt=""
        style={{ width: "20px", height: "20px", marginRight: "80px" }}
      />
      <img src={menosImg} alt="" style={{ width: "20px", height: "20px" }} />
    </footer>
  );
}
