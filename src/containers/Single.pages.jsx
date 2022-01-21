import React from "react";
import { useLocation, useMatch, useParams } from "react-router-dom";
import Header from "../components/Header.component";
import Title from "../components/Title.component";
const Single = () => {
  const { postId, workId } = useParams();
  const location = useLocation();
  const data = location.state?.data;

  console.log(data);

  return (
    <div className="singlepage">
      <Header />
      <div className="blog-container">
        <Title name={data?.name} />
        <img src={data?.featured} alt={data?.featured} />
        <div className="tech-details">
          <h4>Technical Details</h4>
          <p>1. lorem impsum dolor se ch</p>
          <p>1. lorem impsum dolor se ch</p>
          <p>1. lorem impsum dolor se ch</p>
          <p>4. lorem impsum dolor se ch</p>
        </div>
        <div className="text">
          <p>
            Etiam convallis elementum sapien, a aliquam turpis aliquam vitae.
            Praesent sollicitudin felis vel mi facilisis posuere. Nulla ultrices
            facilisis justo, non varius nisl semper vel. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Phasellus at ante mattis,
            condimentum velit et, dignissim nunc. Integer quis tincidunt purus.
            Duis dignissim mauris vel elit commodo, eu hendrerit leo ultrices.
            Nulla vehicula vestibulum purus at rutrum. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Curabitur dignissim massa nec libero scelerisque rutrum.
            Curabitur ac purus id elit hendrerit lacinia. Nullam sit amet sem
            efficitur, porta diam in, convallis tortor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Single;
