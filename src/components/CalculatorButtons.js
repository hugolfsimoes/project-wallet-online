import React from "react";

export default function CalculatorButtons(props) {
  function handeClick(e) {
    props.onClick(e.target.value);
  }
  return (
    <div className="buttons-numbers-operations">
      <button type="button" value="bs" onClick={handeClick}>
        &larr;
      </button>
      <button type="button" value="clear" onClick={handeClick}>
        C
      </button>
      <button type="button" value="el" onClick={handeClick}>
        x2
      </button>
      <button type="button" value="sqr" onClick={handeClick}>
        &radic;
      </button>
      <button type="button" value="7" onClick={handeClick}>
        7
      </button>
      <button type="button" value="8" onClick={handeClick}>
        8
      </button>
      <button type="button" value="9" onClick={handeClick}>
        9
      </button>
      <button type="button" value="/" onClick={handeClick}>
        &divide;
      </button>
      <button type="button" value="4" onClick={handeClick}>
        4
      </button>
      <button type="button" value="5" onClick={handeClick}>
        5
      </button>
      <button type="button" value="6" onClick={handeClick}>
        6
      </button>
      <button type="button" value="*" onClick={handeClick}>
        &times;
      </button>
      <button type="button" value="1" onClick={handeClick}>
        1
      </button>
      <button type="button" value="2" onClick={handeClick}>
        2
      </button>
      <button type="button" value="3" onClick={handeClick}>
        3
      </button>
      <button type="button" value="+" onClick={handeClick}>
        +
      </button>
      <button type="button" value="0" onClick={handeClick}>
        0
      </button>
      <button type="button" value="." onClick={handeClick}>
        .
      </button>
      <button type="button" value="%" onClick={handeClick}>
        %
      </button>
      <button type="button" value="-" onClick={handeClick}>
        &minus;
      </button>
      <button type="button" value="(" onClick={handeClick}>
        (
      </button>
      <button type="button" value=")" onClick={handeClick}>
        )
      </button>
      <button id="button-result" type="button" value="=" onClick={handeClick}>
        =
      </button>
    </div>
  );
}
