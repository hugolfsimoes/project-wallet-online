import React from 'react'

export default function CalculatorButtons() {

  function createNumbersAndOperationsButtons() {
    
    return(
    <div className="buttons-numbers-operations">
      <button type="button" value="bs">&larr;</button>
      <button type="button" value="clear">C</button>
      <button type="button" value="el">x2</button>
      <button type="button" value="sqr">&radic;</button>
      <button type="button" value="7">7</button>
      <button type="button" value="8">8</button>
      <button type="button" value="9">9</button>
      <button type="button" value="/">&divide;</button>
      <button type="button" value="4">4</button>
      <button type="button" value="5">5</button>
      <button type="button" value="6">6</button>
      <button type="button" value="*">&times;</button>
      <button type="button" value="1">1</button>
      <button type="button" value="2">2</button>
      <button type="button" value="3">3</button>
      <button type="button" value="+">+</button>
      <button type="button" value="0">0</button>
      <button type="button" value=",">,</button>
      <button type="button" value="%">%</button>
      <button type="button" value="-">&minus;</button>
      <button type="button" value="(">(</button>
      <button type="button" value=")">)</button>
      <button id="button-result" type="button" value="=">=</button>
    </div>
    )
  }
  return (
    <div>
      {createNumbersAndOperationsButtons()}
    </div>
  )
}
