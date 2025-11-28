import React, { useState } from "react";

function ButtonChild({ onButtonClick }) {
  return (
    <>
      <div className="card">
        <button onClick={onButtonClick}>
          Click to Increment Count
        </button>
      </div>
    </>
  );
}

export default ButtonChild;