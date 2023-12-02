import React from "react";
import { Link } from "react-router-dom";

const Program = ({ programName, descr, image, price, demo, category, id }) => {
  return (
    <div>
      <div>{programName}</div>
      <img src={`http://localhost:4000/${image}`} alt="картинка программы" />
      <div>{category.categoryName}</div>
      <div>Стоимость курса: {price}</div>
      <Link to={`/program/${id}`}>
        <button>Изучать</button>
      </Link>
    </div>
  );
};

export default Program;
