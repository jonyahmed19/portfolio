import React, { useState } from "react";
import Header from "../components/Header.component";
import Title from "../components/Title.component";
import Button from "../components/Button.component";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";
import Card from "../components/Card.component";

const works = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    tags: ["React", "JavaScript"],
    featured: featured1,
    image: work1,
    link: "https://webdesignstall.com",
    tech: ["Adobe XD", "React", "Sass", "React Icons", "React Router 6"],
    description: "",
  },
  {
    id: 2,
    name: "Ecommerce with React, Redux",
    tags: ["React", "Rest API"],
    featured: featured2,
    image: work2,
    link: "https://hekto.herokuapp.com/",
    tech: [
      "Figma",
      "React",
      "Tailwindcss",
      "React Icons",
      "Redux",
      "Redux-Thunk",
      "React Router 6",
      "Localstorage",
    ],
    description: "",
  },
  {
    id: 3,
    name: "Restaurent Website",
    tags: ["Next"],
    featured: featured3,
    image: work3,
    link: "https://fb.com",
    tech: ["Figma", "React", "React Icons"],
    description: "",
  },
];

const Works = () => {
  const [filtered, setFiltered] = useState("");

  const getValue = function (e) {
    setFiltered(e.toLowerCase());
  };
  const filterValue = function () {
    if (filtered != "all" && filtered) {
      return works.filter(function (d) {
        return d?.tags[0].toLowerCase() == filtered;
      });
    } else {
      return works;
    }
  };

  return (
    <div className="workspage">
      <Header />
      <div className="container">
        <Title />
        <div className="filter">
          <Button handle={getValue} text="All" filter={true} />
          <Button handle={getValue} text="React" filter={true} />
          <Button handle={getValue} text="Next" filter={true} />
        </div>
        <div className="card-list">
          {filterValue().map((work) => (
            <Card key={work.id} data={work} works />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
