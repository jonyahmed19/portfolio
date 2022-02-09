import React from "react";
import Header from "../components/Header.component";
import Title from "../components/Title.component";
import work from "../assets/work1.png";
import featured from "../assets/featured1.png";
import Card from "../components/Card.component";

const posts = [
  {
    id: 1,
    name: "Maecenas amet tincidunt",
    tags: ["React, JavaScript"],
    image: work,
    featured: featured,
  },
  {
    id: 2,
    name: "Maecenas amet tincidunt",
    tags: ["PHP"],
    image: work,
    featured: featured,
  },
  {
    id: 3,
    name: "Maecenas amet tincidunt",
    tags: ["Next"],
    image: work,
    featured: featured,
  },
];

const Blog = () => {
  return (
    <div className="workspage">
      <Header />
      <div className="container">
        <Title />
        <div className="card-list">
          {posts.map((post) => (
            <Card key={post.id} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
