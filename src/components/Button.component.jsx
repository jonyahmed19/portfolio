import React from "react";
import { Link } from "react-router-dom";

const Button = ({ send, text, filter, handle }) => {
  return filter ? (
    <button onClick={() => handle(text)} type="button">
      {text}
    </button>
  ) : (
    <Link to={send}>{text}</Link>
  );
};

export default Button;
