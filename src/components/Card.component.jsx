import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Card = ({ data, works }) => {
  const { image, name, tags } = data;

  const location = useLocation();
  const url = encodeURI(name.toLowerCase());
  const salt = works ? "/works/" + url : "/blog/" + url;

  return (
    <Link to={salt} state={{ data: data }}>
      <div className="card">
        <img src={image} alt={image} />
        <div className="info">
          <h4>{name}</h4>

          <p>{tags}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
