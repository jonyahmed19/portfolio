import React from "react";
import { Link } from "react-router-dom";

const Button = ({ send, text }) => {
  return <Link to={send}>{text}</Link>;
};

export default Button;
