import React, { useState } from "react";
import CalculatorButtons from "../components/CalculatorButtons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./style.css";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [acumulator, setAcumulatr] = useState(0);

  function createScreen() {
    return (
      <div>
        <span></span>
        <span></span>
      </div>
    );
  }

  return (
    <div>
      <Header pageName="Calculator" />
      <section>{result}</section>
      <CalculatorButtons />
      <Footer />
    </div>
  );
}
