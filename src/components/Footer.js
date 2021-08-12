import React from "react";
import { useHistory } from "react-router-dom";

import maisImg from "../images/mais.png";
import menosImg from "../images/menos.png";

export default function Footer() {
  const history = useHistory();
  function depositOrSpendingCash(path) {
    history.push(path);
  }
  return (
    <footer style={{ width: "100%", height: "100px" }}>
      <img
        src={maisImg}
        alt=""
        style={{ width: "20px", height: "20px", marginRight: "80px" }}
        onClick={() => depositOrSpendingCash("/deposits")}
      />
      <img
        src={menosImg}
        alt=""
        style={{ width: "20px", height: "20px" }}
        onClick={() => depositOrSpendingCash("/spendings")}
      />
    </footer>
  );
}
