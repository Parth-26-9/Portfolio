import React from "react";
import "./Login.css";

function Login() {

  const bg = document.getElementById("bg");

  function MoveHandler(e) {
    // bg.style.left = `${e.clientX}px`;
    // bg.style.top = `${e.clientY}px`;
    bg.style.left = `${e.clientX}px`
    bg.style.top = `${e.clientY}px  `
}

  return (
    <body>
      <div className="Mycontainer" onMouseMove={MoveHandler}>
        <div className="hex"></div>
        <div className="bg" id="bg"></div>
      </div>
    </body>
  );
}

export default Login;
