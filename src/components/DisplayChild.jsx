import React, { useState } from "react";

function DisplayChild({ count }) {
  return (
    <>
      <div className="card">
        <u>{count}</u>
      </div>
    </>
  );
}

export default DisplayChild;
