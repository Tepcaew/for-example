import React from "react";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

const Category = ({ categoryName, categoryId }) => {

  return (
    <Link to={`/category/${categoryId}`} className={styles.category}>
      <p className={styles.categoryName}>{categoryName}</p>
    </Link>
  );
};

export default Category;
