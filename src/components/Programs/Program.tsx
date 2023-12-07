import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Program.module.css";

const Program = ({
  programName,
  descr,
  image,
  price,
  demo,
  category,
  program,
}) => {
  return (
    <div className={styles.programCard}>
      <img
        className={styles.programImage}
        src={`http://localhost:4000/${image}`}
        alt="картинка программы"
      />
      <div className={styles.programName}>{programName}</div>
      <div className={styles.programCategoryAndPrice}>
        <div className={styles.programCategory}>{category.categoryName}</div>
        <div className={styles.programPrice}>Стоимость курса: {price} ₽</div>
      </div>
      <Link to={`/program/${program}`} className={styles.programCardButtonLink}>
        <button className={styles.programCardButton}>Изучать</button>
      </Link>
    </div>
  );
};

export default Program;
