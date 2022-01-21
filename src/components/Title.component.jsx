import React from "react";
import { useLocation } from "react-router-dom";

const Title = ({ name }) => {
  const location = useLocation();
  return (
    <div className="title">
      <h2>{name ? name : location.pathname.substring(1)}</h2>
      <div className="border"></div>
    </div>
  );
};

export default Title;
