import React from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";
import Header from "../components/Header.component";
import Title from "../components/Title.component";
import { FaExternalLinkAlt } from "react-icons/fa";

const Single = () => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div className="singlepage">
      <Header />
      <div className="blog-container">
        <Title name={data?.name} />
        <img src={data?.featured} alt={data?.featured} />
        <div className="tech-details">
          <h4>Technical Details</h4>
          {data?.tech.map((item, index) => (
            <p key={index}>
              {index + 1}. {item}
            </p>
          ))}

          <a
            style={{
              marginBottom: "25px",
              marginTop: "20px",
              display: "inline-block",
            }}
            target="_blank"
            href={data?.link}
            className="gotoBtn"
          >
            See <FaExternalLinkAlt fontSize={13} />
          </a>
        </div>
        <div className="text">
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
