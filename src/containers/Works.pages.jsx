import React, { useState } from "react";
import Header from "../components/Header.component";
import Title from "../components/Title.component";
import Button from "../components/Button.component";
import work from "../assets/work1.png";
import featured from "../assets/featured.png";
import Card from "../components/Card.component";

const works = [
  {
    id: 1,
    name: "Maecenas amet tincidunt",
    tags: ["React", "JavaScript"],
    featured: featured,
    image: work,
  },
  {
    id: 2,
    name: "Maecenas amet tincidunt",
    tags: ["React", "Rest API"],
    featured: featured,
    image: work,
  },
  {
    id: 3,
    name: "Maecenas amet tincidunt",
    tags: ["Next"],
    featured: featured,
    image: work,
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
  console.log("filterValue", filterValue());

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
