import React, { useState } from "react";
import CalculatorButtons from "../components/CalculatorButtons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./style.css";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [acumulator, setAcumulator] = useState("");

  function getNumberToOperation(number) {
    if (
      number !== "+" &&
      number !== "-" &&
      number !== "*" &&
      number !== "/" &&
      number !== "clear" &&
      number !== "bs" &&
      number !== "%" &&
      number !== "=" &&
      number !== "el" &&
      number !== "sqr"
    ) {
      setAcumulator(acumulator + "" + number);
    } else if (number === "=") {
      setResult(eval(acumulator));
      setAcumulator(eval(acumulator));
    } else if (number === "clear") {
      setAcumulator("");
      setResult("");
    } else if (number === "bs") {
      if (acumulator.toString()[acumulator.toString().length - 1] !== " ") {
        setAcumulator(
          acumulator.toString().substring(0, acumulator.toString().length - 1)
        );
      } else {
        setAcumulator(
          acumulator.toString().substring(0, acumulator.toString().length - 2)
        );
      }
    } else if (number === "el") {
      setResult(Math.pow(Number(acumulator), 2));
      setAcumulator(Math.pow(Number(acumulator), 2));
    } else if (number === "%") {
      setResult(Number(acumulator) / 100);
      setAcumulator(Number(acumulator) / 100);
    } else if (number === "sqr") {
      setResult(Math.sqrt(Number(acumulator)));
      setAcumulator(Math.sqrt(Number(acumulator)));
    } else {
      setAcumulator(acumulator + "  " + number + " ");
    }

    console.log(acumulator);
  }

  function createScreen() {
    return (
      <div>
        <div>{result}</div>
        <div>{acumulator}</div>
      </div>
    );
  }

  return (
    <div>
      <Header pageName="Calculator" />
      <section>{createScreen()}</section>
      <CalculatorButtons onClick={getNumberToOperation} />
      <Footer />
    </div>
  );
}
