import React from "react";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

const Category = ({ categoryName, categoryId }) => {

  return (
    <Link to={`/programs/${categoryId}`} className={styles.category}>
      <h3 className={styles.categoryName}>{categoryName}</h3>
    </Link>
  );
};

export default Category;
